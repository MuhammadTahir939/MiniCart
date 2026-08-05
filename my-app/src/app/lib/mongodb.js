import mongoose from "mongoose";

const MONGODB_URI = process.env.DBURI;

async function connectDB() {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Already connected ");
            return;
        }
        await mongoose.connect(MONGODB_URI);
        console.log("Mongodb is connected");
    }
    catch (error) {
        console.log("Mongodb has an error:", error)
    }
}

export default connectDB