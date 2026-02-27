import express from "express";
import cors from "cors";
import {globalErrorHandler} from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import goalRoutes from "./routes/goal.routes.js";
import billRoutes from "./routes/bill.routes.js"
import budgetRoutes from "./routes/budget.routes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(globalErrorHandler);
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/bill", billRoutes);
app.use("/api/budget", budgetRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

export default app;