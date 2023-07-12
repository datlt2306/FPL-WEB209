import { ProductContext } from "@/context/ProductContext";
import React, { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";

const ProductList = () => {
    const { products, fetchProducts, isLoading, error, addProduct, removeProduct, updateProduct } =
        useContext(ProductContext);

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

            <Button type="primary" onClick={() => addProduct({ name: "Product C" })}>
                Add Product
            </Button>
            <Button
                type="primary"
                onClick={() => updateProduct({ name: "Product C updated ", id: 3 })}
            >
                Update Product
            </Button>
            <Button type="primary" onClick={() => removeProduct({ id: 3 })}>
                Delete Product
            </Button>
        </div>
    );
};

export default ProductList;
