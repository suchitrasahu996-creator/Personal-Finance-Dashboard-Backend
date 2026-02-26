import * as budgetService from "../services/budget.service.js";

export const createBudget = async (req, res) => {
  try {
    const budget = await budgetService.createBudget(
      req.user.id,
      req.body
    );

    res.status(201).json({
      success: true,
      data: budget,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBudgets = async (req, res) => {
  try {
    const budgets = await budgetService.getBudgets(
      req.user.id
    );

    res.json({
      success: true,
      data: budgets,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBudget = async (req, res) => {
  try {
    await budgetService.deleteBudget(
      req.user.id,
      req.params.id
    );

    res.json({
      success: true,
      message: "Budget deleted",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};