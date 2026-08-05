"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { IoTriangle } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

export default function OrderConfirmationPage() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const saved = sessionStorage.getItem("lastOrder");
        if (saved) setOrder(JSON.parse(saved));
        else router.push("/");
    }, []);

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    if (!order) return null;

    return (
        <div>

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

            <div className="w-11/12 md:w-[38%] mx-auto h-[35vh] md:h-[81vh] p-8 text-center bg-gray-200 rounded-2xl">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                    ✓
                </div>
                <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
                <p className="text-gray-500 mb-8">
                    Thank you, {user?.fullName}. Your order has been placed successfully.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 text-left space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Order Number</span>
                        <span className="font-bold">{order.orderNumber}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Total Paid</span>
                        <span className="font-bold">${order.total}.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Delivery Address</span>
                        <span className="font-semibold text-right">
                            {order.shippingDetails.address}, {order.shippingDetails.city}, {order.shippingDetails.postalCode}
                        </span>
                    </div>
                </div>

                <Link href="/">
                    <button className="mt-8 bg-black text-white w-full py-3 rounded-lg">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
}