import Razorpay from 'razorpay';
import crypto from 'crypto';
import { ApiError } from '../utils/ApiError.js';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const paymentService = {
  async createPaymentOrder(orderData) {
    try {
      const options = {
        amount: orderData.amount, // amount in smallest currency unit (paise)
        currency: 'INR',
        receipt: `order_${Date.now()}`,
        notes: {
          orderId: orderData.orderId,
          userId: orderData.userId,
        },
      };

      const order = await razorpay.orders.create(options);
      return order;
    } catch (error) {
      throw new ApiError(500, 'Error creating Razorpay order: ' + error.message);
    }
  },

  async verifyPayment(paymentData) {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = paymentData;

    // Create signature verification data
    const sign = `${razorpay_order_id}|${razorpay_payment_id}`;

    // Generate expected signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest('hex');

    // Verify signature
    if (expectedSignature !== razorpay_signature) {
      throw new ApiError(400, 'Invalid payment signature');
    }

    return {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
    };
  },

  async getPaymentDetails(paymentId) {
    try {
      const payment = await razorpay.payments.fetch(paymentId);
      return payment;
    } catch (error) {
      throw new ApiError(500, 'Error fetching payment details: ' + error.message);
    }
  },

  async refundPayment(paymentId, amount) {
    try {
      const refund = await razorpay.payments.refund(paymentId, {
        amount: amount, // amount in smallest currency unit (paise)
      });
      return refund;
    } catch (error) {
      throw new ApiError(500, 'Error processing refund: ' + error.message);
    }
  },
}; 