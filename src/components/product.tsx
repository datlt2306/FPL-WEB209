import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { fetchProducts } from "../slice/product";

type Props = {};

const Product = (props: Props) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.value);
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div>
            <Link to="/admin/products/add">Add</Link>
            {products.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default Product;
