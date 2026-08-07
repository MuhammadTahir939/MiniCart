// lib/products.js

import connectDB from "./mongodb";
import Product from "./models/Products.js";

export async function getAllProducts() {
    await connectDB();
    const products = await Product.find({});
    return JSON.parse(JSON.stringify(products));
}