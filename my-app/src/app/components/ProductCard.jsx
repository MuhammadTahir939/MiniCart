"use client"
import { FiShoppingCart } from 'react-icons/fi'
import Link from "next/link";
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product, 1)
    }
    return (
        <div className="bg-gray-200 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <Link href={`/products/${product._id}`}>
                <div className="bg-black h-48 flex items-center justify-center" >
                    <img src={product.image} alt={product.name} width={150} height={150}
                    />
                </div>
            </Link>
            <div className="p-4 flex justify-between items-center">
                <div>
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="font-bold pt-2">${product.price}.00</p>
                </div>
                <div className='cart bg-black p-2 md:p-3 rounded-full items-center justify-center' onClick={handleAddToCart}>
                    <FiShoppingCart size={18} className='text-white' /></div>
            </div>
        </div>
    )
}
export default ProductCard;