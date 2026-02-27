import { supabase } from "../configs/supabase.config.js";

/* ---------------- CREATE BILL ---------------- */
export const createBill = async (billData) => {

  const { data, error } = await supabase
    .from("bill_reminders")
    .insert([{
      user_id: billData.user_id,
      name: billData.name,
      amount: billData.amount,
      due_date: billData.due_date,
      paid: billData.paid ?? false,
    }])
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};


/* ---------------- GET BILLS ---------------- */
export const getBillsByUserId = async (userId) => {

  const { data, error } = await supabase
    .from("bill_reminders")
    .select("*")
    .eq("user_id", userId)
    .order("due_date", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
};


/* ---------------- UPDATE PAID STATUS ---------------- */
export const updateBillPaidStatus = async (
  userId,
  billId,
  paid
) => {

  const { data, error } = await supabase
    .from("bill_reminders")
    .update({ paid })
    .eq("id", billId)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
};


/* ---------------- DELETE BILL ---------------- */
export const deleteBill = async (userId, billId) => {

  const { error } = await supabase
    .from("bill_reminders")
    .delete()
    .eq("id", billId)
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  return true;
};