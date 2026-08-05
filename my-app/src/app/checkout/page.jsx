"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoTriangle } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";


export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const { user } = useAuth();
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: user?.fullName || "",
        email: user?.email || "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        paymentMethod: "cod",
    });

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const orderData = {
            orderNumber: "NX-" + Math.floor(10000000 + Math.random() * 90000000),
            items: cart,
            subtotal,
            shipping,
            total,
            shippingDetails: formData,
        };
        sessionStorage.setItem("lastOrder", JSON.stringify(orderData));
        clearCart();
        router.push("/order")
    };
    const handleLogout = () => {
        logout();
        router.push("/login")
    }

    return (
        <div className="max-w-6xl">
            <div className="w-full flex h-20 items-center justify-between px-6">
                <Link href="/">
                    <div className="logo font-bold text-xl flex items-center gap-2">
                        <span><IoTriangle size={18} /></span>
                        MiniCart</div>
                </Link>
                <div className="flex items-center gap-3">
                    {user && (
                        <div className="flex items-center gap-3">
                            <span>Hi, {user.fullName}</span>
                            <button onClick={handleLogout} className="">Logout</button>
                            <Link href="/" className="flex items-center mt-2 gap-2 text-white bg-black p-3 rounded-lg">
                                <FaArrowLeft size={14} />
                                Back to Shop
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <h1 className="text-2xl font-bold">Checkout</h1>
            <p className="text-gray-500 mb-8">
                Almost there — just a few details before we ship your order.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Shipping Details */}
                <div className="bg-gray-200 rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-6">Shipping Details</h2>

                    <form onSubmit={handlePlaceOrder} className="space-y-4">
                        <div>
                            <label className="block font-semibold mb-1 text-sm">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-sm">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-sm">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="03xx-xxxxxxx"
                                className="w-full border rounded-lg px-4 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-sm">Street Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="House #, street, area"
                                className="w-full border rounded-lg px-4 py-2"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold mb-1 text-sm">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-semibold mb-1 text-sm">Postal Code</label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-2"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg font-semibold mt-4"
                        >
                            Place Order
                        </button>
                    </form>
                </div>

                <div className="bg-black text-white rounded-xl p-6 h-fit">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                    {cart.map((item) => (
                        <div key={item._id} className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-3">
                                <img src={item.image} alt={item.name} className="w-10 h-10" />
                                <div className="flex-1">
                                    <span className="block">{item.name}</span>
                                    <span className="text-xs test-gray-400">Qty: {item.quantity}</span>
                                </div>
                            </div>
                            <span>${item.price}.00</span>
                        </div>
                    ))}

                    <div className="border-t border-gray-700 pt-4 mt-4 space-y-2">
                        <div className="flex justify-between text-gray-400">
                            <span>Subtotal</span>
                            <span>${subtotal}.00</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <span>Shipping</span>
                            <span>${shipping}.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2">
                            <span>Total</span>
                            <span>${total}.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}