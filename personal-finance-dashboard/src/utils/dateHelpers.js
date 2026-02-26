export const getCurrentMonth = () => {
  const date = new Date();
  return date.getMonth() + 1;
};

export const calculateDaysRemaining = (dueDate) => {
  const today = new Date();
  const target = new Date(dueDate);

  const diffTime = target - today;

  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};