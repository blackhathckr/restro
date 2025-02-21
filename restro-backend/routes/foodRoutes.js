import { Router } from 'express';
import { foodController } from '../controllers/foodController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = Router();

router
  .route('/')
  .post(protect, authorize('admin'), foodController.createFood)
  .get(foodController.getAllFoods);

router
  .route('/:id')
  .get(foodController.getFoodById)
  .put(protect, authorize('admin'), foodController.updateFood)
  .delete(protect, authorize('admin'), foodController.deleteFood);

router
  .route('/:id/ratings')
  .post(protect, foodController.addRating);

export default router; 