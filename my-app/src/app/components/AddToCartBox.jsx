"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

const AddToCartBox = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const increase = () => setQuantity((prev) => prev + 1);
    const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };
    return (
        <div>
            <div className='flex items-center gap-4 mt-6'>
                <span className='font-bold'>Quantity</span>
                <div className='flex  items-center justify-center'>
                    <button onClick={decrease} className='px-3 py-1 rounded-full font-semibold bg-gray-200'>-</button>
                    <span className='px-4'>{quantity}</span>
                    <button onClick={increase} className='px-3 py-1 rounded-full font-semibold bg-gray-200'>+</button>
                </div>
            </div>
            <button
                onClick={handleAddToCart}
                className="bg-black text-white px-6 py-3 rounded-lg mt-6"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default AddToCartBox;
