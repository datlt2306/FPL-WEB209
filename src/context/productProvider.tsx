import { createContext, useEffect, useState } from "react";
import { IProduct } from "../interfaces/Product";
import { addProduct, editProduct, getProducts, removeProduct } from "../services/product";

export const ProductContext = createContext([] as any[]);

type ProductContextProviderProps = {
    children: React.ReactNode;
};

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        (async () => {
            const data = await getProducts();
            setProducts(data);
        })();
    }, []);

    const onHandleAdd = async (product: IProduct) => {
        try {
            const data = await addProduct(product);
            setProducts([...products, data]);
        } catch (error) {}
    };
    const onHandleEdit = async (product: IProduct) => {
        try {
            const data = await editProduct(product);
            setProducts(products.map((item) => (item.id == data.id ? data : item)));
        } catch (error) {}
    };
    const onHandleRemove = async (id: number) => {
        try {
            const data = await removeProduct(id);
            setProducts(products.filter((item) => item.id !== id));
        } catch (error) {}
    };
    return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};
export default ProductContextProvider;
