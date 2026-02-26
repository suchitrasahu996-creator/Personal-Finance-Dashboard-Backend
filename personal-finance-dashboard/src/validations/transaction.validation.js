import Joi from "joi";

export const transactionSchema = Joi.object({

  type: Joi.string()
    .valid("income", "expense")
    .required(),

  amount: Joi.number()
    .positive()
    .precision(2)
    .required(),

  category: Joi.string()
    .min(2)
    .max(50)
    .required(),

  date: Joi.date()
    .required(),

  description: Joi.string()
    .max(255)
    .allow("")
    .optional()

});