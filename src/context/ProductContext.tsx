import { instance } from "@/axios/config";
import { pause } from "@/utils/pause";
import { createContext, useState } from "react";

export const ProductContext = createContext({} as any);

type ProductProviderProps = {
    children: React.ReactNode;
};

const ProductProvider = ({ children }: ProductProviderProps) => {
    const [products, setProducts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            await pause(1000);
            const data = await instance.get(`/products`);
            setProducts(data as any);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <ProductContext.Provider value={{ products, isLoading, error, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
