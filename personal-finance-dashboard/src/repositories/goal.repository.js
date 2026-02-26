import { supabase } from "../configs/supabase.config.js";

export const insertGoal = async (userId, data) => {

  const { data: result, error } = await supabase
    .from("goals")
    .insert([{
      user_id: userId,
      name: data.name,
      target_amount: data.target_amount,
      saved_amount: data.saved_amount || 0,
      deadline: data.deadline
    }])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return result;
};

export const getGoalsByUserId = async (userId) => {

  const { data, error } = await supabase
    .from("goals")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
};

export const updateGoalSavedAmount = async (
  userId,
  goalId,
  savedAmount
) => {

  const { data, error } = await supabase
    .from("goals")
    .update({ saved_amount: savedAmount })
    .eq("id", goalId)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const deleteGoal = async (userId, goalId) => {

  const { error } = await supabase
    .from("goals")
    .delete()
    .eq("id", goalId)
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

};