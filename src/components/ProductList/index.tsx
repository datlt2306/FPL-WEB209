import { ProductContext } from "@/context/ProductContext";
import React, { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const ProductList = () => {
    const { products, fetchProducts, isLoading, error } = useContext(ProductContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    if (isLoading) return <Skeleton count={3} height={35} />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products.map((item: any) => {
                return <div key={item.id}>{item.name}</div>;
            })}
        </div>
    );
};

export default ProductList;
