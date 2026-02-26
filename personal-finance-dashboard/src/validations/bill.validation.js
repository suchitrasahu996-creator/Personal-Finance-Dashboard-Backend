import Joi from "joi";

export const createBillSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),

  amount: Joi.number().positive().required(),

  due_date: Joi.date().required(),

  status: Joi.string()
    .valid("pending", "paid")
    .optional(),
});

export const updateBillStatusSchema = Joi.object({
  status: Joi.string()
    .valid("pending", "paid")
    .required(),
});