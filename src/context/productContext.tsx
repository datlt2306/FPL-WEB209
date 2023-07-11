//         App -- State
//     | props
// List     Add     Edit
// Item
// ContextAPI - share state các component

import axios from "axios";
import { createContext, useState } from "react";

// 1. Tạo context

export const ProductContext = createContext({} as any);

const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState([] as any);

    const addProduct = async (product: any) => {
        try {
            // call api
            const { data } = await axios.post(`http://localhost:3000/products/${product}`);
            // rerender
            setProducts([...products, data]);
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const editProduct = async (product: any) => {
        try {
            // call api
            const { data } = await axios.put(`http://localhost:3000/products/${product.id}`);
            // rerender
            setProducts(products.map((item: any) => (item.id === data.id ? data : item)));
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const deleteProduct = async (product: any) => {
        try {
            // call api
            await axios.delete(`http://localhost:3000/products/${product.id}`);
            // rerender
            setProducts(products.filter((item: any) => item.id !== product.id));
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const fetchProduct = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/products`);
            setProducts(data);
        } catch (error) {}
    };
    return (
        <ProductContext.Provider
            value={{ products, fetchProduct, addProduct, editProduct, deleteProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
};
export default ProductProvider;
