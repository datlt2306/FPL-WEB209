import React, { useEffect, useState } from "react";
import { IProduct } from "../../types/product";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const ProductList = () => {
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/products`);
            return response.data;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    return (
        <div>
            <ul>
                {data.map((item: IProduct) => (
                    <li key={item?.id}>
                        {item?.name} - {item?.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
