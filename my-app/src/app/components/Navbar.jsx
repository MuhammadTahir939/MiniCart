"use client"
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { IoTriangle } from 'react-icons/io5'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '../context/AuthContext'


const Navbar = () => {
    const { setIsCartOpen, cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const { user, logout } = useAuth();
    const pathname = usePathname();
    if (pathname === "/login" || pathname === "/signup" || pathname === "/checkout" || pathname === "/order") {
        return null;
    }
    return (
        <>
            <div className='w-full text-black flex h-20 items-center justify-between px-2'>
                <Link href="/">
                    <div className="logo font-bold text-xl flex items-center gap-2 hover:">
                        <span><IoTriangle size={18} /></span>
                        MiniCart</div>
                </Link>
                <ul className='flex gap-2  md:gap-5'>
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact Us</Link>
                </ul>
                <div className="btn flex gap-2 md:gap-5 items-center">
                    {user ? (
                        <div className='flex items-center gap-3'>
                            <span>Hi, {user.fullName}</span>
                            <button onClick={logout}>Logout</button>
                        </div>
                    ) : (
                        <Link href="/login">LogIn</Link>
                    )
                    }
                    <div onClick={() => setIsCartOpen(true)} className="cart bg-black p-2 rounded-full items-center justify-center relative"><FiShoppingCart
                        size={24} className='text-white' />
                        {totalItems > 0 && (<span className='absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center'>
                            {totalItems}
                        </span>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar