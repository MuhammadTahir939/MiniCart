import connectDB from "@/app/lib/mongodb";
import User from "@/app/lib/models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
    await connectDB();
    const { fullName, email, password } = await request.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return Response.json({ message: "Email already registered" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        fullName,
        email,
        password: hashedPassword,
    });

    return Response.json({ message: "Account created successfully" }, { status: 201 });
}