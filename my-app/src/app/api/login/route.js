import connectDB from "@/app/lib/mongodb";
import User from "@/app/lib/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    await connectDB();
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
        return Response.json({ message: "Incorrect email or password" }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return Response.json({ message: "Incorrect email or password" }, { status: 401 });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    return Response.json({
        message: "Login successful",
        token,
        user: { fullName: user.fullName, email: user.email },
    });
}