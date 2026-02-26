export const analyzeBudget = (transactions, budget) => {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0);
  return {
    totalSpent: total,
    remaining: budget - total,
  };
};