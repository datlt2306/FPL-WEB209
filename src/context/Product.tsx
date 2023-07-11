import { IProduct } from "@/interfaces/product";
import { pause } from "@/utils/pause";
import { createContext, useState } from "react";

export const ProductContext = createContext({} as any);

type ProductProviderProps = {
    children: React.ReactNode;
};

const ProductProvider = ({ children }: ProductProviderProps) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            await pause(1000);
            // call api
            const response = await fetch(`http://localhost:3000/products`);
            const data = await response.json();
            //rerender
            setProducts(data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    const addProduct = async (product: IProduct) => {
        setIsLoading(true);
        try {
            await pause(1000);
            // call api
            const response = await fetch(`http://localhost:3000/products`, {
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
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    const editProduct = async (product: IProduct) => {
        setIsLoading(true);
        try {
            await pause(1000);
            // call api
            await fetch(`http://localhost:3000/products/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            // rerender
            setProducts(products.map((item) => (item.id === product.id ? product : item)));
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    const deleteProduct = async (product: IProduct) => {
        setIsLoading(true);
        try {
            await pause(1000);
            // call api
            await fetch(`http://localhost:3000/products/${product.id}`, {
                method: "DELETE",
            });
            // rerender
            setProducts(products.filter((item) => item.id !== product.id));
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
                fetchProducts,
                isLoading,
                error,
                addProduct,
                editProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
export default ProductProvider;
