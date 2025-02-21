import { paymentService } from '../services/paymentService.js';
import { orderService } from '../services/orderService.js';
import { catchAsync } from '../utils/catchAsync.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { paymentValidation } from '../validations/paymentValidation.js';

export const paymentController = {
  createPaymentOrder: [
    validateSchema(paymentValidation.createOrder),
    catchAsync(async (req, res) => {
      const { orderId } = req.body;
      
      // Get order details
      const order = await orderService.getOrderById(orderId);
      
      // Create Razorpay order
      const paymentOrder = await paymentService.createPaymentOrder({
        amount: order.totalAmount * 100, // Convert to paise
        orderId: order._id,
        userId: req.user._id,
      });

      res.status(200).json({
        orderId: paymentOrder.id,
        amount: paymentOrder.amount,
        currency: paymentOrder.currency,
        keyId: process.env.RAZORPAY_KEY_ID,
      });
    }),
  ],

  verifyPayment: [
    validateSchema(paymentValidation.verifyPayment),
    catchAsync(async (req, res) => {
      const verifiedPayment = await paymentService.verifyPayment(req.body);
      
      // Get payment details
      const paymentDetails = await paymentService.getPaymentDetails(
        verifiedPayment.paymentId
      );

      // Update order payment status
      if (paymentDetails.notes && paymentDetails.notes.orderId) {
        await orderService.updateOrderStatus(
          paymentDetails.notes.orderId,
          'confirmed'
        );
      }

      res.status(200).json({
        message: 'Payment verified successfully',
        payment: verifiedPayment,
      });
    }),
  ],

  getPaymentDetails: catchAsync(async (req, res) => {
    const payment = await paymentService.getPaymentDetails(req.params.paymentId);
    res.status(200).json(payment);
  }),

  refundPayment: [
    validateSchema(paymentValidation.refundPayment),
    catchAsync(async (req, res) => {
      const { paymentId, amount } = req.body;
      const refund = await paymentService.refundPayment(paymentId, amount);
      res.status(200).json(refund);
    }),
  ],
}; 