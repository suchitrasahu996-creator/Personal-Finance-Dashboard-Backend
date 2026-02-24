import dotenv from "dotenv";
import app from "./src/app.js";
import dbConnectionCheck from "./src/utils/dbHealthCheck.js";

dotenv.config();

const PORT = process.env.PORT || 4268;
if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET missing");
}

if (!process.env.SUPABASE_URL) {
    throw new Error("SUPABASE_URL missing");
}

if (!process.env.SUPABASE_SECRET_KEY) {
    throw new Error("SUPABASE_SECRET_KEY missing");
}
async function startServer() {
    await dbConnectionCheck();

    app.listen(PORT, () =>
        console.log(`Server running on port ${PORT}`)
    );
}

startServer();