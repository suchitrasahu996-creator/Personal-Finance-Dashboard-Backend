import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorMiddleware);
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

export default app;