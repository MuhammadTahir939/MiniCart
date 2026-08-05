import connectDB from "@/app/lib/mongodb";
import Product from "@/app/lib/models/Products";

export async function GET() {
    await connectDB();
    const Products = await Product.find();
    return Response.json(Products);
}

export async function POST(request) {
    await connectDB();
    const body = await request.json();
    const newProduct = await Product.create(body);
    return Response.json(newProduct);
}