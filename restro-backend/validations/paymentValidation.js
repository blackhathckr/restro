import Joi from 'joi';

export const paymentValidation = {
  createOrder: Joi.object({
    orderId: Joi.string().required(),
  }),

  verifyPayment: Joi.object({
    razorpay_order_id: Joi.string().required(),
    razorpay_payment_id: Joi.string().required(),
    razorpay_signature: Joi.string().required(),
  }),

  refundPayment: Joi.object({
    paymentId: Joi.string().required(),
    amount: Joi.number().required().min(1),
  }),
}; 