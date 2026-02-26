import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import dbConnectionCheck from "./src/utils/dbHealthCheck.js";

const PORT = process.env.PORT || 4268;

if (!process.env.JWT_SECRET)
    throw new Error("JWT_SECRET missing");

if (!process.env.SUPABASE_URL)
    throw new Error("SUPABASE_URL missing");

if (!process.env.SUPABASE_SECRET_KEY)
    throw new Error("SUPABASE_SECRET_KEY missing");

async function startServer() {

    try {

        await dbConnectionCheck();

        app.listen(PORT, () =>
            console.log(`Server running on port ${PORT}`)
        );

    }
    catch(error) {

        console.error(error.message);
        process.exit(1);

    }

}

startServer();