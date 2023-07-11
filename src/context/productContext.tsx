//         App -- State
//     | props
// List     Add     Edit
// Item
// ContextAPI - share state các component

import { createContext, useState } from "react";

// 1. Tạo context

export const ProductContext = createContext({} as any);

const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
    ] as any);
    const [count, setCount] = useState(0);

    const addProduct = (product: any) => {
        setProducts([...products, product]);
    };

    return (
        <ProductContext.Provider value={{ products, count, addProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
export default ProductProvider;
