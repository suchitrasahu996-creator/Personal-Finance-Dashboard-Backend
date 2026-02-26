import dotenv from 'dotenv'
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
console.log("SUPABASE_URL =", process.env.SUPABASE_URL);
console.log("KEY prefix =", process.env.SUPABASE_SECRET_KEY?.substring(0, 10));

if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error("Supabase credentials missing");
}

export const supabase = createClient(
    supabaseUrl,
    supabaseSecretKey,
    {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        }
    }
);