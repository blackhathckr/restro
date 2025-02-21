import { orderService } from '../services/orderService.js';
import { catchAsync } from '../utils/catchAsync.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { orderValidation } from '../validations/orderValidation.js';

export const orderController = {
  createOrder: [
    validateSchema(orderValidation.createOrder),
    catchAsync(async (req, res) => {
      const order = await orderService.createOrder(req.user._id, req.body);
      res.status(201).json(order);
    }),
  ],

  getUserOrders: catchAsync(async (req, res) => {
    const orders = await orderService.getUserOrders(req.user._id, req.query);
    res.status(200).json(orders);
  }),

  getAllOrders: catchAsync(async (req, res) => {
    const orders = await orderService.getAllOrders(req.query);
    res.status(200).json(orders);
  }),

  getOrderById: catchAsync(async (req, res) => {
    const order = await orderService.getOrderById(req.params.id);
    res.status(200).json(order);
  }),

  updateOrderStatus: [
    validateSchema(orderValidation.updateOrderStatus),
    catchAsync(async (req, res) => {
      const order = await orderService.updateOrderStatus(req.params.id, req.body.status);
      res.status(200).json(order);
    }),
  ],

  cancelOrder: catchAsync(async (req, res) => {
    const order = await orderService.cancelOrder(req.params.id, req.user._id);
    res.status(200).json(order);
  }),
}; 