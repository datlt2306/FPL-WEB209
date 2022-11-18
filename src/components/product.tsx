import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../apiSlice/product";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { fetchProducts } from "../slice/product";

type Props = {};

const Product = (props: Props) => {
    const { data: products, isLoading, error } = useGetProductsQuery();
    // const dispatch = useAppDispatch();
    // const products = useAppSelector((state) => state.products.value);
    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, []);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
        <div>
            <Link to="/admin/products/add">Add</Link>
            {products!.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default Product;
