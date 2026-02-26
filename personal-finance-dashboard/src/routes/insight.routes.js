import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { fetchInsights } from "../controllers/insights.controller.js";

const router = express.Router();

router.use(protect);
router.get("/", fetchInsights);

export default router;