import { supabase } from "../configs/supabase.config.js";

const createUser = async (userData) => {

    const { data, error } = await supabase
        .from("users")
        .insert(userData)
        .select("id, name, email, role")
        .single();

    if (error) throw error;

    return data;
};

const findUserByEmail = async (email) => {

    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .maybeSingle();

    if (error) throw error;

    return data;
};

export default {
    createUser,
    findUserByEmail
};