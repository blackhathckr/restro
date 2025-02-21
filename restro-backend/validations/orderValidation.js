import Joi from 'joi';

export const orderValidation = {
  createOrder: Joi.object({
    items: Joi.array().items(
      Joi.object({
        food: Joi.string().required(),
        quantity: Joi.number().required().min(1),
      })
    ).required().min(1),
    paymentMethod: Joi.string().required().valid('cod', 'online'),
    deliveryAddress: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      postalCode: Joi.string().required(),
    }).required(),
    specialInstructions: Joi.string().allow('', null),
  }),

  updateOrderStatus: Joi.object({
    status: Joi.string()
      .required()
      .valid('pending', 'confirmed', 'preparing', 'out-for-delivery', 'delivered', 'cancelled'),
  }),
}; 