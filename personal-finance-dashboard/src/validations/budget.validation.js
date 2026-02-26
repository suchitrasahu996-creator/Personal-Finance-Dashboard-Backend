import Joi from "joi";

export const createBudgetSchema = Joi.object({
  category_id: Joi.string().uuid().required(),

  amount: Joi.number().positive().required(),

  month: Joi.number().min(1).max(12).required(),

  year: Joi.number().min(2020).required(),
});