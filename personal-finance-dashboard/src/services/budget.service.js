// src/services/budget.service.js

import * as budgetRepo from "../repositories/budget.repository.js";
import * as transactionRepo from "../repositories/transaction.repository.js";
import { analyzeBudget } from "../utils/budgetAnalyzer.js";

export const createBudget = async (userId, data) => {
  return await budgetRepo.insertBudget(userId, data);
};

export const getBudgets = async (userId) => {
  return await budgetRepo.getBudgetsByUser(userId);
};

export const checkBudgetStatus = async (userId, month) => {
  const budgets = await budgetRepo.getBudgetsByUser(userId);
  const transactions = await transactionRepo.getTransactionsByUser(userId);

  const expenseTransactions = transactions.filter(
    (t) => t.type === "expense"
  );

  return budgets.map((budget) => {
    const actualSpent = expenseTransactions
      .filter((t) => t.category === budget.category)
      .reduce((sum, t) => sum + Number(t.amount), 0);

    const analysis = analyzeBudget(budget.limit_amount, actualSpent);

    return {
      ...budget,
      actualSpent,
      ...analysis,
    };
  });
};