import { createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "../interfaces/Product";
import axios from "axios";

export const ProductContext = createContext({} as any);

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                setProducts(data);
            } catch (error) {}
        })();
    }, []);

    const onHandleRemove = async (id: number) => {
        try {
            const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
            setProducts(products.filter((item) => item.id !== id));
        } catch (error) {}
    };

    const onHandleAdd = async (product: IProduct) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            // rerender
            setProducts([...products, data]);
        } catch (error) {}
    };
    const onHandleEdit = async (product: IProduct) => {
        try {
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            // rerender
            setProducts(products.map((item) => (item.id === product.id ? product : item)));
        } catch (error) {}
    };

    return (
        <div>
            <ProductContext.Provider
                value={{ products, setProducts, onHandleRemove, onHandleEdit, onHandleAdd }}
            >
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;
