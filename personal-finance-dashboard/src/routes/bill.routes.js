import express from "express";
import { protect } from "../middlewares/auth.middleware.js";

import {
  createBill,
  getBills,
  updateBillStatus,
  deleteBill,
} from "../controllers/bill.controller.js";
import {
  createBillSchema,
  updateBillStatusSchema,
} from "../validations/bill.validation.js";

import { validate } from "../middlewares/validate.middleware.js";

const router = express.Router();
router.post("/addBill", protect, validate(createBillSchema), createBill);
router.get("/getBills", protect, getBills);

router.put(
  "/updateBill/:id/status",
  protect,
  validate(updateBillStatusSchema),
  updateBillStatus,
);
router.delete("/deleteBill/:id", protect, deleteBill);

export default router;
