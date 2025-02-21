import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { ApiError } from '../utils/ApiError.js';

export const authService = {
  async registerUser(userData) {
    const { email } = userData;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new ApiError(400, 'User already exists');
    }

    // Create user
    const user = await User.create(userData);
    return this.generateUserResponse(user);
  },

  async loginUser(email, password) {
    // Find user
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      throw new ApiError(401, 'Invalid email or password');
    }

    return this.generateUserResponse(user);
  },

  generateUserResponse(user) {
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: this.generateToken(user._id),
    };
  },

  generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  },
}; 