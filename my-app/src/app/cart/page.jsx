"use client";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { FaTimes, FaTrash } from "react-icons/fa";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
    const router = useRouter();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="w-4/12 mx-auto p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Your Cart</h1>
                <div className="flex gap-4 items-center">
                    {cart.length > 0 && (
                        <FaTrash onClick={clearCart} className="cursor-pointer" />
                    )}
                    <FaTimes size={20} className="cursor-pointer" onClick={() => router.back()} />
                </div>
            </div>



            {cart.length === 0 && <p>Your cart is empty.</p>}

            {cart.map((item) => (
                <div key={item._id} className="flex justify-between items-center border-b py-4">
                    <div className="flex gap-4 items-center">
                        <div className="bg-black w-20 h-20 rounded-lg flex items-center justify-center">
                            <img src={item.image} alt={item.name} className="max-h-full" />
                        </div>
                        <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-gray-600">${item.price}.00</p>
                            <div className="flex items-center mt-2">
                                <button onClick={() => updateQuantity(item._id, "dec")} className="px-3 py-1 rounded-full font-semibold bg-gray-200">-</button>
                                <span className="px-4">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item._id, "inc")} className="px-3 py-1 rounded-full font-semibold bg-gray-200">+</button>
                            </div>
                        </div>
                    </div>
                    <FaTimes
                        className="cursor-pointer text-gray-500"
                        onClick={() => removeFromCart(item._id)}
                    />
                </div>
            ))}

            {cart.length > 0 && (
                <>
                    <div className="flex justify-between mt-6 font-bold text-lg">
                        <span>Total</span>
                        <span>${total}.00</span>
                    </div>
                    <button className="bg-black text-white w-full py-3 rounded-lg mt-6">
                        Checkout
                    </button>
                </>
            )}
        </div>
    );
}