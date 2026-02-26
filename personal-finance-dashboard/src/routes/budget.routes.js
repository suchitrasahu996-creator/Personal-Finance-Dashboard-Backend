import express from "express";

import {
  createBudget,
  getBudgets,
  deleteBudget,
} from "../controllers/budget.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

import { validate } from "../middlewares/validate.middleware.js";

import { createBudgetSchema } from "../validations/budget.validation.js";

const router = express.Router();

router.post("/addBudget", protect, validate(createBudgetSchema), createBudget);

router.get("/getBudget", protect, getBudgets);

router.delete("/deleteBudget/:id", protect, deleteBudget);

export default router;
