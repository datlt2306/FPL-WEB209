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
    const addProduct = async (product: any) => {
        setIsLoading(true);
        try {
            await pause(1000);
            const data = await instance.post(`/products`, product);
            setProducts([...products, product]);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    const removeProduct = async (product: any) => {
        setIsLoading(true);
        try {
            await pause(1000);
            await instance.delete(`/products/${product.id}`);
            setProducts(products.filter((item) => item.id !== product.id));
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    const updateProduct = async (product: any) => {
        setIsLoading(true);
        try {
            await pause(1000);
            await instance.put(`/products/${product.id}`, product);
            setProducts(products.map((item) => (item.id === product.id ? product : item)));
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                isLoading,
                error,
                fetchProducts,
                removeProduct,
                updateProduct,
                addProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
