import { supabase } from "../configs/supabase.config.js";

const dbConnectionCheck = async () => {

    try {

        const { data, error } =
            await supabase
                .from("users")
                .select("id")
                .limit(1);

        if (error) {
            throw error;
        }

        console.log("Database connected successfully");

    }
    catch (error) {

        console.error("Database connection failed:", error.message);
        process.exit(1);

    }

};

export default dbConnectionCheck;