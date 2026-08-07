import mongoose from "mongoose";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1"]);
const MONGODB_URI = process.env.DBURI;

async function connectDB() {
    try {
        if (!MONGODB_URI) {
            console.warn("MongoDB URI is not configured.");
            return false;
        }

        if (mongoose.connection.readyState === 1) {
            console.log("Already connected");
            return true;
        }

        await mongoose.connect(MONGODB_URI);
        console.log("Mongodb is connected");
        return true;
    } catch (error) {
        console.log("Mongodb has an error:", error);
        return false;
    }
}

export default connectDB