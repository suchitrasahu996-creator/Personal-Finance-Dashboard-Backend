import { supabase } from "../configs/supabase.config.js";

export const insertTransaction = async (userId, data) => {

    const { data: transaction, error } =
        await supabase
            .from("transactions")
            .insert({

                user_id: userId,
                type: data.type,
                amount: data.amount,
                category: data.category,
                date: data.date,
                description: data.description

            })
            .select()
            .single();

    if (error) throw error;

    return transaction;

};


export const getTransactionsByUser = async (userId) => {

    const { data, error } =
        await supabase
            .from("transactions")
            .select("*")
            .eq("user_id", userId)
            .order("date", { ascending: false });

    if (error) throw error;

    return data;

};


export const deleteTransaction = async (userId, id) => {

    const { error } =
        await supabase
            .from("transactions")
            .delete()
            .eq("id", id)
            .eq("user_id", userId);

    if (error) throw error;

    return true;

};


export const getMonthlyTransactions =
async (userId, year, month) => {

    const startDate =
        new Date(year, month - 1, 1);

    const endDate =
        new Date(year, month, 0);

    const { data, error } =
        await supabase
            .from("transactions")
            .select("*")
            .eq("user_id", userId)
            .gte("date", startDate.toISOString())
            .lte("date", endDate.toISOString());

    if (error) throw error;

    return data;

};