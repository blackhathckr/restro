import { foodService } from '../services/foodService.js';
import { catchAsync } from '../utils/catchAsync.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { foodValidation } from '../validations/foodValidation.js';
import { uploadImage } from '../utils/uploadImage.js';

export const foodController = {
  createFood: [
    uploadImage.single('image'),
    validateSchema(foodValidation.createFood),
    catchAsync(async (req, res) => {
      const foodData = {
        ...req.body,
        image: req.file.path,
      };
      const food = await foodService.createFood(foodData);
      res.status(201).json(food);
    }),
  ],

  getAllFoods: catchAsync(async (req, res) => {
    const result = await foodService.getAllFoods(req.query);
    res.status(200).json(result);
  }),

  getFoodById: catchAsync(async (req, res) => {
    const food = await foodService.getFoodById(req.params.id);
    res.status(200).json(food);
  }),

  updateFood: [
    uploadImage.single('image'),
    validateSchema(foodValidation.updateFood),
    catchAsync(async (req, res) => {
      const updateData = { ...req.body };
      if (req.file) {
        updateData.image = req.file.path;
      }
      const food = await foodService.updateFood(req.params.id, updateData);
      res.status(200).json(food);
    }),
  ],

  deleteFood: catchAsync(async (req, res) => {
    await foodService.deleteFood(req.params.id);
    res.status(204).json();
  }),

  addRating: [
    validateSchema(foodValidation.addRating),
    catchAsync(async (req, res) => {
      const { rating, review } = req.body;
      const food = await foodService.addRating(
        req.params.id,
        req.user._id,
        rating,
        review
      );
      res.status(200).json(food);
    }),
  ],
}; 