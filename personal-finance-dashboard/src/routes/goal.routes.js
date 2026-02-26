import express from "express";
import {
  createGoal,
  getGoals,
  updateGoalProgress,
  deleteGoal,
} from "../controllers/goal.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/addGoal", protect, createGoal);
router.get("/getAllGoals", protect, getGoals);
router.put("/updateGoal/:id/progress", protect, updateGoalProgress);
router.delete("/deleteGoal/:id", protect, deleteGoal);

export default router;