import connectDB from "@/app/lib/mongodb";
import Message from "@/app/lib/models/message";

export async function POST(request) {
    await connectDB();
    const body = await request.json();
    const newMessage = await Message.create(body);
    return Response.json(newMessage)
}