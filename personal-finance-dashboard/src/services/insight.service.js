import { getUserTransactions } from "../repositories/transaction.repository.js";

export const getInsights = async (userId) => {
  const { data } = await getUserTransactions(userId);

  const income = data
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = data
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return {
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense,
  };
};