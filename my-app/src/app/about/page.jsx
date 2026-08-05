import React from 'react'
import { FaShieldAlt, FaTags, FaUsers, FaSyncAlt } from "react-icons/fa";


const values = [
    {
        icon: <FaShieldAlt size={35} className="text-black" />,
        title: "Quality Products",
        description:
            "We carefully select every product to ensure durability, reliability, and customer satisfaction.",
    },
    {
        icon: <FaTags size={35} className="text-black" />,
        title: "Affordable Prices",
        description:
            "We offer competitive prices without compromising on the quality of our products.",
    },
    {
        icon: <FaUsers size={35} className="text-black" />,
        title: "Customer First",
        description:
            "Our customers are our priority. We provide fast support before and after every purchase.",
    },
    {
        icon: <FaSyncAlt size={35} className="text-black" />,
        title: "Always Improving",
        description:
            "We continuously improve our services and product collection based on customer feedback.",
    },
];
const value = [
    {
        title: "50K+",
        description:
            "Happy Customer",
    },
    {
        title: "120+",
        description:
            "Products Shipped Worldwide",
    },
    {
        title: "4.8/5",
        description:
            "Average Customer Rating",
    },
    {
        title: "24/7",
        description:
            "Customer Support",
    },
];
const about = () => {
    return (
        <div>
            <div className='hero bg-black text-white w-full h-60 rounded-2xl px-7 md:px-14 py-5 md:py-10 my-3'>
                <div className='w-10/12 flex flex-col gap-5'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Built for Smarter Online Shopping</h1>
                    <p className='text-gray-400 w-10/12'>Minicart was created with one goal: to make online shopping simple, reliable, and enjoyable. We carefully select quality products and provide a smooth shopping experience with secure payments, fast delivery, and customer-focused service. Every feature is designed to help you shop with confidence and convenience.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 my-4 md:my-8">
                {value.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl py-9 hover:shadow-lg transition "
                    >
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className="text-xl font-bold">
                                {item.title}
                            </h2>
                            <p className="text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto py-2">
                <h1 className='text-2xl font-bold my-4'>What We Stand For</h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-4">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 rounded-2xl p-7 hover:shadow-lg transition"
                        >
                            <div className="mb-6">{item.icon}</div>

                            <h3 className="text-xl font-bold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default about
