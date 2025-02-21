import { Router } from 'express';
import { paymentController } from '../controllers/paymentController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = Router();

// Protected routes
router.use(protect);

// Payment routes
router.post('/create-order', paymentController.createPaymentOrder);
router.post('/verify', paymentController.verifyPayment);

// Admin only routes
router.get(
  '/:paymentId',
  authorize('admin'),
  paymentController.getPaymentDetails
);
router.post(
  '/refund',
  authorize('admin'),
  paymentController.refundPayment
);

export default router; 