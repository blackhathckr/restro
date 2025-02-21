import Joi from 'joi';

export const foodValidation = {
  createFood: Joi.object({
    name: Joi.string().required().min(2).max(100),
    description: Joi.string().required().min(10),
    price: Joi.number().required().min(0),
    category: Joi.string()
      .required()
      .valid('starter', 'main-course', 'dessert', 'beverage'),
    isVegetarian: Joi.boolean(),
    isAvailable: Joi.boolean(),
    preparationTime: Joi.number().required().min(1),
  }),

  updateFood: Joi.object({
    name: Joi.string().min(2).max(100),
    description: Joi.string().min(10),
    price: Joi.number().min(0),
    category: Joi.string().valid('starter', 'main-course', 'dessert', 'beverage'),
    isVegetarian: Joi.boolean(),
    isAvailable: Joi.boolean(),
    preparationTime: Joi.number().min(1),
  }),

  addRating: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    review: Joi.string().min(5).max(500),
  }),
}; 