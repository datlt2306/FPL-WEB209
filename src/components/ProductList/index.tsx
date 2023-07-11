import { ProductContext } from "@/context/Product";
import { IProduct } from "@/interfaces/product";
import React, { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";

const ProductList = () => {
    const { products, fetchProducts, isLoading, error, addProduct, deleteProduct, editProduct } =
        useContext(ProductContext);

    useEffect(() => {
        fetchProducts();
    }, []);
    if (error) return <div>Something went wrong</div>;
    return (
        <div>
            {isLoading ? (
                <Skeleton count={4} height={35} />
            ) : (
                products?.map((item: IProduct) => {
                    return <div key={item.id}>{item.name}</div>;
                })
            )}

            <Button
                type="primary"
                onClick={() => addProduct({ name: "Product Added", price: 500 })}
            >
                Add Product
            </Button>
            <Button type="primary" onClick={() => editProduct({ name: "Product Updated", id: 3 })}>
                Edit Product
            </Button>
            <Button type="danger" onClick={() => deleteProduct({ id: 3 })}>
                Delete Product
            </Button>
        </div>
    );
};

export default ProductList;
