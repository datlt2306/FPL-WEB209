import axiosInstance from "../config/axios";
import { IProduct } from "../interfaces/Product";


export const getAllProducts = async () => {
    try {
        const { data } = await axiosInstance.get(`/products`)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getProductById = async (id: number) => {
    try {
        const { data } = await axiosInstance.get(`/products/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const createProduct = async (product: IProduct) => {
    try {
        const { data } = await axiosInstance.post(`/products`, product);
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const removeProduct = async (product: IProduct) => {
    try {
        const { data } = await axiosInstance.delete(`/products/${product.id}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const updateProduct = async (product: IProduct) => {
    try {
        const { data } = await axiosInstance.put(`/products/${product.id}`, product);
        return data;
    } catch (error) {
        console.log(error)
    }
}