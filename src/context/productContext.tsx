//         App -- State
//     | props
// List     Add     Edit
// Item
// ContextAPI - share state các component

import { createContext, useState } from "react";

// 1. Tạo context

export const ProductContext = createContext({} as any);

const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState([] as any);

    const addProduct = async (product: any) => {
        try {
            // call api
            const response = await fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            const data = await response.json();
            // rerender
            setProducts([...products, data]);
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const editProduct = async (product: any) => {
        try {
            // call api
            const response = await fetch(`http://localhost:3000/products/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            const data = await response.json();
            // rerender
            setProducts(products.map((item: any) => (item.id === data.id ? data : item)));
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const deleteProduct = async (product: any) => {
        try {
            // call api
            await fetch(`http://localhost:3000/products/${product.id}`, {
                method: "DELETE",
            });
            // rerender
            setProducts(products.filter((item: any) => item.id !== product.id));
        } catch (error: any) {
            console.log(error.message);
        }
    };
    const fetchProduct = async () => {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
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
