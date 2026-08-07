"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { IoTriangle } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { usePathname } from 'next/navigation'



const footer = () => {
    const [email, setEmail] = useState("");
    const pathname = usePathname();

    const handleSubscribe = () => {
        console.log("Subcribed: ", email);
        setEmail("");
    }
    if (pathname === "/login" || pathname === "/signup" || pathname === "/checkout" || pathname === "/order") {
        return null;
    }
    return (
        <>
            <div className='w-full rounded-xl md:rounded-2xl bg-black text-white px-5 md:px-10 mt-5 md:mt-10'>
                <div className="flex flex-col-5 md:justify-between py-7 md:py-12 gap-1.5 md:gap-6">
                    <div className="w-1/5 hidden md:block flex flex-col gap-3">
                        <div className="logo font-bold text-xl flex items-center gap-2">
                            <span><IoTriangle size={18} /></span>
                            MiniCart</div>
                        <p className=" text-gray-500">Shop premium products crafted for modern living. Enjoy convenience, quality, and unbeatable value with MiniCart.</p>
                    </div>
                    <div className="w-1/5 flex flex-col text-gray-500 gap-2 px-2">
                        <h1 className='text-base font-bold text-white'>Shop</h1>
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/login">LogIn</Link>
                    </div>
                    <div className="w-1/5 flex flex-col text-gray-500 gap-2 px-2">
                        <h1 className='text-base font-bold text-white'>Company</h1>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                    <div className="w-1/5 flex flex-col text-gray-500 gap-2 px-2">
                        <h1 className='text-base font-bold text-white'>Support</h1>
                        <Link href="#" className='text-gray-500'>FAQs</Link>
                        <Link href="#" className='text-gray-500'>Returns</Link>
                        <Link href="#" className='text-gray-500'>Shipping Policy</Link>
                    </div>
                    <div className="w-1/4 flex flex-col gap-3">
                        <h1 className='font-bold text-base'>Stay Updated</h1>
                        <p className='text-gray-500'>Get product drops and offers in your inbox.</p>
                        <div className='flex flex-col gap-2 relative'>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Your email'
                                className='w-full px-2 py-2 rounded-lg text-gray-500 font-semibold border'
                            />
                            <button onClick={handleSubscribe} className=' absolute right-1 top-1 bottom-1 bg-white text-black px-4 rounded-lg font-semibold'>
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='text-gray-900 h-0' />
                <div className='text-gray-500 py-5 px-5 flex items-center justify-between'>
                    <p>&copy; 2026 MiniCart. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={20} className="text-gray-500" />
                        </a>
                        <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={20} className="text-gray-500" />
                        </a>
                        <a href="https://x.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter size={20} className="text-gray-500" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer