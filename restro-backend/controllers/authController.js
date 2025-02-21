import { authService } from '../services/authService.js';
import { catchAsync } from '../utils/catchAsync.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { authValidation } from '../validations/authValidation.js';

export const authController = {
  register: [
    validateSchema(authValidation.register),
    catchAsync(async (req, res) => {
      const user = await authService.registerUser(req.body);
      res.status(201).json(user);
    }),
  ],

  login: [
    validateSchema(authValidation.login),
    catchAsync(async (req, res) => {
      const { email, password } = req.body;
      const user = await authService.loginUser(email, password);
      res.status(200).json(user);
    }),
  ],
}; 