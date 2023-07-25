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

// export const addProduct = (product: any) => async (dispatch: any) => {
//     const { data } = await axios.post(`http://localhost:3000/products`, product);
//     dispatch({ type: "products/addProduct", payload: data });
// };
// export const updateProduct = (product: any) => async (dispatch: any) => {
//     const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product);
//     dispatch({ type: "products/updateProduct", payload: data });
// };
// export const deleteProduct = (id: any) => async (dispatch: any) => {
//     await axios.delete(`http://localhost:3000/products/${id}`);
//     dispatch({ type: "products/deleteProduct", payload: id });
// };