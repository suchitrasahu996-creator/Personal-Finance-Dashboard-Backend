export const autoCategorize = (title) => {
  const lower = title.toLowerCase();

  if (lower.includes("swiggy") || lower.includes("zomato"))
    return "Food";

  if (lower.includes("uber") || lower.includes("ola"))
    return "Transport";

  if (lower.includes("electric"))
    return "Utilities";

  return "Others";
};