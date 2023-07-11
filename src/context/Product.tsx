import { createContext, useState } from "react";

const ProductContext = createContext([]);

const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
    ]);
    return (
        <ProductContext.Provider value={{ products, setProducts } as any}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductProvider };
export default ProductContext;
