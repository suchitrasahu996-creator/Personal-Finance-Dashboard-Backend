import Joi from "joi";

export const createGoalSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),

  target_amount: Joi.number().positive().required(),

  saved_amount: Joi.number().min(0).optional(),

  deadline: Joi.date().greater("now").required(),
});

export const updateGoalProgressSchema = Joi.object({
  saved_amount: Joi.number()
    .min(0)
    .required(),
});