import express from "express";

import {
    addTransaction,
    getTransactions,
    deleteTransaction,
    getMonthlySummary
}
from "../controllers/transaction.controller.js";

import{ protect}
from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/addTransaction", protect, addTransaction);

router.get("/getTransaction", protect, getTransactions);

router.delete("/deleteTransaction/:id", protect, deleteTransaction);

router.get(
    "/summary/monthly",
    protect,
    getMonthlySummary
);

export default router;