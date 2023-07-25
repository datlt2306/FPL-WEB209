import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data;
        } catch (error: any) {
            return error.message;
        }
    }
);

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (product: any) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            return data;
        } catch (error: any) {
            return error.message;
        }
    }
)
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product: any) => {
        try {
            const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
            return data
        } catch (error: any) {
            return error.message
        }
    }
)
export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (id: any) => {
        await axios.delete(`http://localhost:3000/products/${id}`);
        return id
    }
)