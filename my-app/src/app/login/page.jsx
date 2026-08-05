"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Incorrect email or password");
                return;
            }

            setError("");
            login(data.user); // AuthContext mein user set karein
            localStorage.setItem("token", data.token); // token save karein
            router.push("/");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="h-[93vh]">
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

            <div className="flex items-center justify-center px-4 mt-6">
                <div className="w-full max-w-sm bg-gray-200 p-8 rounded-xl shadow-sm">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                        <p className="text-gray-500 mb-6">Login to continue your account</p>
                    </div>



                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-semibold mb-1 text-sm">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full border rounded-lg px-4 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-semibold mb-1 text-sm">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full border rounded-lg px-4 py-2"
                                required
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg font-semibold"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-black font-semibold underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}