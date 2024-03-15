import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { IProduct } from "../interfaces/Product";
import axios from "axios";

const initialState = {
    value: [] as IProduct[],
};

export const ProductContext = createContext({} as any);

const reducer = (state: { value: IProduct[] }, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                value: action.payload,
            };
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, dispatch] = useReducer(reducer, initialState);

    // const onHandleRemove = async (id: number) => {
    //     try {
    //         const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
    //         setProducts(products.filter((item) => item.id !== id));
    //     } catch (error) {}
    // };

    // const onHandleAdd = async (product: IProduct) => {
    //     try {
    //         const { data } = await axios.post(`http://localhost:3000/products`, product);
    //         // rerender
    //         setProducts([...products, data]);
    //     } catch (error) {}
    // };
    // const onHandleEdit = async (product: IProduct) => {
    //     try {
    //         const { data } = await axios.put(
    //             `http://localhost:3000/products/${product.id}`,
    //             product
    //         );
    //         // rerender
    //         setProducts(products.map((item) => (item.id === product.id ? product : item)));
    //     } catch (error) {}
    // };

    return (
        <div>
            <ProductContext.Provider value={{ products, dispatch }}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;
