import { Router } from 'express';
import { orderController } from '../controllers/orderController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = Router();

// Protected routes (require authentication)
router.use(protect);

// User routes
router.post('/', orderController.createOrder);
router.get('/my-orders', orderController.getUserOrders);
router.post('/:id/cancel', orderController.cancelOrder);

// Admin routes
router.get('/', authorize('admin'), orderController.getAllOrders);
router.get('/:id', authorize('admin'), orderController.getOrderById);
router.put('/:id/status', authorize('admin'), orderController.updateOrderStatus);

export default router; 