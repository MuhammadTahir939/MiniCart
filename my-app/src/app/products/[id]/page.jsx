import connectDB from "@/app/lib/mongodb";
import Product from "@/app/lib/models/Products";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import AddToCartBox from "@/app/components/AddToCartBox";

async function getProduct(id) {
    await connectDB();
    const product = await Product.findById(id);
    return JSON.parse(JSON.stringify(product));
}

export default async function ProductDetail({ params }) {
    const { id } = await params;
    const product = await getProduct(id);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
            <div className="bg-black rounded-2xl h-96 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="max-h-full" />
            </div>

            <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-2xl text-blue-600 font-semibold mt-2">
                    ${product.price}.00
                </p>
                <AddToCartBox product={product} />
                <Link href="/products" className="flex items-center gap-2 mt-6 text-gray-600">
                    <FaArrowLeft size={16} />
                    Back to all products
                </Link>
            </div>
        </div>
    );
}