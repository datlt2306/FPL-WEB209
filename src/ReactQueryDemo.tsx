/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReactQueryDemo = () => {
    const {
        isLoading,
        isError,
        error,
        data: products,
    } = useQuery({
        queryKey: ["PRODUCTS_KEY"],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/products`);
            const data = await response.json();
            return data;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <>{error.message}</>;
    return (
        <div>
            {products.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default ReactQueryDemo;
