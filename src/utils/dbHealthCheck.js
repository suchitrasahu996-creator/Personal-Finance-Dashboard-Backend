import {supabase} from "../configs/supabase.config.js";

const dbConnectionCheck = async () => {
    try {

        const { data, error } = await supabase.rpc("version");

        if (error) throw error;

        console.log("Database connected successfully");

    } catch (error) {

        console.error("Database connection failed:", error.message);
        process.exit(1);

    }
};

export default dbConnectionCheck