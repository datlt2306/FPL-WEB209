import { instance } from "../config/axios";
import { IProduct } from "../interfaces/Product";

export const getProducts = async () => {
    try {
        const response = await instance.get("/products");
        return response.data;
    } catch (error) {
        return (error as Error);
    }
};
export const getProduct = async (id: number | string) => {
    try {
        const response = await instance.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        return (error as Error);
    }
};
export const addProduct = async (product: IProduct) => {
    try {
        const response = await instance.post('/products', product);
        return response.data;
    } catch (error) {
        return (error as Error);
    }
}
export const editProduct = async (product: IProduct) => {
    try {
        const response = await instance.put(`/products/${product.id}`, product);
        return response.data;
    } catch (error) {
        return (error as Error);
    }
}
export const removeProduct = async (id: number | string) => {
    try {
        const response = await instance.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        return (error as Error);
    }
} 