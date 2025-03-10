import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:3000/products`);
                if (response.status !== 200)
                    throw new Error("An error occurred while fetching products");
                setProducts(response.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div>
            <h1>Product List</h1>
            <Link to="/products/add">Add Product</Link>
            {products?.map((item: any, index: number) => (
                <li key={item?.id}>
                    <span>{item?.name}</span>
                </li>
            ))}
        </div>
    );
};

export default ProductList;
