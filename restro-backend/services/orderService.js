import Order from '../models/orderModel.js';
import Food from '../models/foodModel.js';
import { ApiError } from '../utils/ApiError.js';

export const orderService = {
  async createOrder(userId, orderData) {
    // Verify all food items exist and calculate prices
    const orderItems = await Promise.all(
      orderData.items.map(async (item) => {
        const food = await Food.findById(item.food);
        if (!food) {
          throw new ApiError(404, `Food item ${item.food} not found`);
        }
        if (!food.isAvailable) {
          throw new ApiError(400, `Food item ${food.name} is currently unavailable`);
        }
        return {
          food: item.food,
          quantity: item.quantity,
          price: food.price,
        };
      })
    );

    const order = await Order.create({
      user: userId,
      items: orderItems,
      paymentMethod: orderData.paymentMethod,
      deliveryAddress: orderData.deliveryAddress,
      specialInstructions: orderData.specialInstructions,
    });

    return order.populate(['items.food', 'user']);
  },

  async getUserOrders(userId, query = {}) {
    const { status, page = 1, limit = 10 } = query;
    
    const filter = { user: userId };
    if (status) filter.status = status;

    const orders = await Order.find(filter)
      .populate(['items.food', 'user'])
      .sort('-createdAt')
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Order.countDocuments(filter);

    return {
      orders,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      total,
    };
  },

  async getAllOrders(query = {}) {
    const { status, page = 1, limit = 10 } = query;
    
    const filter = {};
    if (status) filter.status = status;

    const orders = await Order.find(filter)
      .populate(['items.food', 'user'])
      .sort('-createdAt')
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Order.countDocuments(filter);

    return {
      orders,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      total,
    };
  },

  async getOrderById(orderId) {
    const order = await Order.findById(orderId).populate(['items.food', 'user']);
    if (!order) {
      throw new ApiError(404, 'Order not found');
    }
    return order;
  },

  async updateOrderStatus(orderId, status) {
    const order = await Order.findById(orderId);
    if (!order) {
      throw new ApiError(404, 'Order not found');
    }

    order.status = status;
    await order.save();
    return order.populate(['items.food', 'user']);
  },

  async cancelOrder(orderId, userId) {
    const order = await Order.findOne({ _id: orderId, user: userId });
    if (!order) {
      throw new ApiError(404, 'Order not found');
    }

    if (!['pending', 'confirmed'].includes(order.status)) {
      throw new ApiError(400, 'Order cannot be cancelled at this stage');
    }

    order.status = 'cancelled';
    await order.save();
    return order.populate(['items.food', 'user']);
  },
}; 