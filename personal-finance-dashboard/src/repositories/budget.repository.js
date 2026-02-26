import { supabase } from "../configs/supabase.config.js";

export const createBudget = async (budgetData) => {
  const { data, error } = await supabase
    .from("budgets")
    .insert([budgetData])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const getBudgetsByUser = async (userId) => {
  const { data, error } = await supabase
    .from("budgets")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return data;
};

export const deleteBudget = async (
  userId,
  budgetId
) => {
  const { error } = await supabase
    .from("budgets")
    .delete()
    .eq("id", budgetId)
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
};