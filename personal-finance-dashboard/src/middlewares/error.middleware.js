// src/middlewares/error.middleware.js

export const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Development Mode
  if (process.env.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  }

  // Production Mode
  if (process.env.NODE_ENV === "production") {
    // Operational errors (trusted)
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    // Programming / unknown errors
    return res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
};