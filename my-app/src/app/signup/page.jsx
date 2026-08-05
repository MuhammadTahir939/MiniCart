"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Something went wrong");
                return;
            }

            setError("");
            router.push("/login");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen">
            <div className="w-full flex h-20 items-center justify-between px-6">
                <Link href="/">
                    <div className="logo font-bold text-xl flex items-center gap-2 hover:">
                        <span><IoTriangle size={18} /></span>
                        MiniCart</div>
                </Link>
                <Link href="/" className="flex items-center mt-5 gap-2 text-white bg-black p-3 rounded-lg">
                    <FaArrowLeft size={14} />
                    Back to Shop
                </Link>
            </div>

            <div className="flex items-center justify-center px-4 mt-5">
                <div className="w-full max-w-sm bg-gray-200 p-8 rounded-xl shadow-sm">
                    <div className="flex flex-col items-center justify-center">

                        <h1 className="text-2xl font-bold mb-2">Create Account</h1>
                        <p className="text-gray-500 mb-6">
                            Sign up to start shopping with MiniCart.
                        </p>
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-semibold mb-1 text-sm">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="testuser"
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
                                placeholder="you@example.com"
                                className="w-full border rounded-lg px-4 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="At least 6 characters"
                                className="w-full border rounded-lg px-4 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-sm">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Re-enter password"
                                className="w-full border rounded-lg px-4 py-2"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg font-semibold"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account?{" "}
                        <Link href="/login" className="text-black font-semibold underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}