import { MdDescription } from "react-icons/md";
import ProductCard from "../components/ProductCard";

async function getProducts() {
    const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" })
    return res.json();
}

export default async function Products({
    title = "All Products",
    description = "Browse our full range of premium smart gadgets, built for performance and everyday life."
}) {
    const products = await getProducts();
    return (
        <>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-400 py-2">{description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
                {products.map((product, index) => {
                    const isLastItem = index === 8
                    return (
                        <div key={product._id} className={isLastItem ? "hidden lg:block" : ""}>
                            <ProductCard product={product} />
                        </div>
                    )
                })}

            </div>
        </>

    )
}