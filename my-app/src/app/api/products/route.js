import connectDB from "@/app/lib/mongodb";
import Product from "@/app/lib/models/Products";

export async function GET() {
    try {
        await connectDB();
        const products = await Product.find().lean();
        return Response.json(products);
    } catch (error) {
        console.error("Products API error:", error);
        return Response.json([], { status: 200 });
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        const newProduct = await Product.create(body);
        return Response.json(newProduct);
    } catch (error) {
        console.error("Create product error:", error);
        return Response.json({ message: "Unable to create product right now." }, { status: 500 });
    }
}