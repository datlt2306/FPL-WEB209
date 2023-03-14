import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../actions/product";
import { IProduct } from "../interfaces/Product";
const ProductsList = () => {
    const products = useSelector(({ product }) => product.value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div>
            {products.map((product: IProduct) => {
                return <div>{product.name}</div>;
            })}
        </div>
    );
};

export default ProductsList;
