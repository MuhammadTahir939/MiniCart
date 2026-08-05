"use client";
import { useCart } from "@/app/context/CartContext";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";




const CartDrawer = () => {
    const { user } = useAuth();
    const router = useRouter();
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const handleCheckout = () => {
        setIsCartOpen(false);
        if (!user) {
            router.push("/login")
        }
        else {
            router.push("/checkout")
        }
    }


    return (
        <>
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsCartOpen(false)}
                />
            )}
            <div
                className={`fixed top-0 right-0 h-full sm:w-96 bg-gray-200 z-50 shadow-lg transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 h-full flex flex-col overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Your Cart</h1>
                        <div className="flex items-center gap-4">
                            {cart.length > 0 && (
                                <FaTrash size={18} className="cursor-pointer text-gray-500" onClick={clearCart} />
                            )}
                            <FaTimes size={20} className="cursor-pointer" onClick={() => setIsCartOpen(false)} />
                        </div>
                    </div>

                    {cart.length === 0 && <p>Your cart is empty.</p>}

                    {cart.map((item) => (
                        <div key={item._id} className="flex justify-between items-center border-b py-4">
                            <div className="flex gap-4 items-center">
                                <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center">
                                    <img src={item.image} alt={item.name} className="max-h-full" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">{item.name}</h3>
                                    <p className="text-gray-500 text-sm">${item.price}.00</p>
                                    <div className="flex items-center mt-2 w-fit">
                                        <button onClick={() => updateQuantity(item._id, "dec")} className="px-3 py-1 rounded-full font-semibold bg-gray-300">-</button>
                                        <span className="px-3">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item._id, "inc")} className="px-3 py-1 rounded-full font-semibold bg-gray-300">+</button>
                                    </div>
                                </div>
                            </div>
                            <FaTimes size={14} className="cursor-pointer text-gray-400" onClick={() => removeFromCart(item._id)} />
                        </div>
                    ))}

                    {cart.length > 0 && (
                        <div className="mt-auto">
                            <div className="flex justify-between mt-6 font-bold text-lg">
                                <span>Total</span>
                                <span>${total}.00</span>
                            </div>

                            <button onClick={handleCheckout} className="bg-black text-white w-full py-3 rounded-lg mt-6">
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartDrawer;