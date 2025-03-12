import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => (await axios.get(`http://localhost:3000/products`)).data,
    });
    if (isLoading) return <div>Loading.aå..</div>;
    if (error) return <div>Error: {error?.message}</div>;
    return (
        <div>
            <h1>Product List</h1>
            <Link to="/products/add">Add Product</Link>
            {data?.map((item: any, index: number) => (
                <li key={item?.id}>
                    <span>{item?.name}</span>
                </li>
            ))}
        </div>
    );
};

export default ProductList;

// client state
// server state
