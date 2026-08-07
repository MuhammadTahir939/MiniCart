import { MdDescription } from "react-icons/md";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../lib/products";

async function getProducts() {
    try {

        const products = await getAllProducts();
        return Array.isArray(products) ? products : [];
    } catch (error) {
        console.error("Failed to load products:", error);
        return [];
    }
}

export default async function Products({
    title = "All Products",
    description = "Browse our full range of premium smart gadgets, built for performance and everyday life."
}) {
    const products = await getProducts();
    const safeProducts = Array.isArray(products) ? products : [];

    return (
        <>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-400 py-2">{description}</p>

            {safeProducts.length === 0 ? (
                <div className="rounded-xl border border-gray-700 bg-gray-900/60 p-6 text-gray-300">
                    Products are temporarily unavailable. Please try again shortly.
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
                    {safeProducts.map((product, index) => {
                        const isLastItem = index === 8;
                        return (
                            <div key={product._id} className={isLastItem ? "hidden lg:block" : ""}>
                                <ProductCard product={product} />
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}