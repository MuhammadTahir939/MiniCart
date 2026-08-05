"use client";
import { useState, useEffect } from "react";

const images = [
    "https://i.ibb.co/8gZTxJ7s/hedphone-removebg-preview.png",
    "https://i.ibb.co/6xRjZVk/buds-removebg-preview.png",
    "https://i.ibb.co/HfMwSHpy/headphone-removebg-preview.png",
    "https://i.ibb.co/Q3n7mXtL/mp3-removebg-preview-1.png",
];

export default function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (!isHovering) {
            setCurrent(0);
            return;
        }
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isHovering]);

    return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <img
                src={images[current]}
                alt="product"
                className="max-h-full transition-opacity duration-500"
            />
        </div>
    );
}