import { supabase } from "../configs/supabase.config.js";

export const createBill = async (billData) => {
  const { data, error } = await supabase
    .from("bill_reminders")
    .insert([billData])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const getBillsByUserId = async (userId) => {
  const { data, error } = await supabase
    .from("bill_reminders")
    .select("*")
    .eq("user_id", userId)
    .order("due_date", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
};

export const updateBillStatus = async (
  userId,
  billId,
  status
) => {
  const { data, error } = await supabase
    .from("bill_reminders")
    .update({ status })
    .eq("id", billId)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const deleteBill = async (userId, billId) => {
  const { error } = await supabase
    .from("bill_reminders")
    .delete()
    .eq("id", billId)
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
};