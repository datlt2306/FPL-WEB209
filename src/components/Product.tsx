import React, { useEffect } from "react";
import { fetchProducts } from "../slice/product";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

type Props = {};

const Product = (props: Props) => {
    const dispatch = useAppDispatch();
    const { value: products, loading } = useAppSelector((state: RootState) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    if (loading) return <div>Loading...</div>;
    return <div>{products.map((item) => item.name)}</div>;
};

export default Product;
