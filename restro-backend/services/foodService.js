import Food from '../models/foodModel.js';
import { ApiError } from '../utils/ApiError.js';

export const foodService = {
  async createFood(foodData) {
    const food = await Food.create(foodData);
    return food;
  },

  async getAllFoods(query = {}) {
    const {
      category,
      isVegetarian,
      isAvailable,
      minPrice,
      maxPrice,
      search,
      sort = '-createdAt',
      page = 1,
      limit = 10,
    } = query;

    const filter = {};

    // Apply filters
    if (category) filter.category = category;
    if (isVegetarian !== undefined) filter.isVegetarian = isVegetarian;
    if (isAvailable !== undefined) filter.isAvailable = isAvailable;
    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};
      if (minPrice !== undefined) filter.price.$gte = minPrice;
      if (maxPrice !== undefined) filter.price.$lte = maxPrice;
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const foods = await Food.find(filter)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Food.countDocuments(filter);

    return {
      foods,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      total,
    };
  },

  async getFoodById(id) {
    const food = await Food.findById(id);
    if (!food) {
      throw new ApiError(404, 'Food not found');
    }
    return food;
  },

  async updateFood(id, updateData) {
    const food = await Food.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    if (!food) {
      throw new ApiError(404, 'Food not found');
    }
    return food;
  },

  async deleteFood(id) {
    const food = await Food.findByIdAndDelete(id);
    if (!food) {
      throw new ApiError(404, 'Food not found');
    }
    return food;
  },

  async addRating(foodId, userId, rating, review) {
    const food = await Food.findById(foodId);
    if (!food) {
      throw new ApiError(404, 'Food not found');
    }

    // Check if user has already rated
    const existingRatingIndex = food.ratings.findIndex(
      r => r.user.toString() === userId.toString()
    );

    if (existingRatingIndex >= 0) {
      food.ratings[existingRatingIndex] = { user: userId, rating, review };
    } else {
      food.ratings.push({ user: userId, rating, review });
    }

    await food.save();
    return food;
  },
}; 