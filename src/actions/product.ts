import { IProduct } from "@/interfaces/product";
import { pause } from "@/utils/pause";
import axios from "axios";

// action creator
export const fetchProducts = () => async (dispatch: any) => {
    dispatch({ type: "product/fetching" })// isLoading: true
    try {
        // call api
        await pause(1000)
        const { data } = await axios.get(`http://localhost:3000/products`);
        //rerender
        dispatch({ type: "product/fetchingSuccess", payload: data });
    } catch (error: any) {
        dispatch({ type: "product/fetchingFailed" })
    } finally {
        dispatch({ type: "product/fetchingFinally" })
    }
};

export const addProduct = (product: IProduct) => async (dispatch: any) => {
    try {
        // call api
        const { data } = await axios.post(`http://localhost:3000/products`, product);
        // rerender
        dispatch({ type: "product/add", payload: data });
    } catch (error: any) {
    } finally {
    }
};

export const editProduct = (product: IProduct) => async (dispatch: any) => {
    try {
        // call api
        const { data } = await axios.put(
            `http://localhost:3000/products/${product.id}`,
            product
        );
        // rerender
        dispatch({ type: "product/edit", payload: data });
    } catch (error: any) {
    } finally {
    }
};
export const deleteProduct = (id: number) => async (dispatch: any) => {
    try {
        // call api
        await axios.delete(`http://localhost:3000/products/${id}`);
        // rerender
        dispatch({ type: "product/delete", payload: id });
    } catch (error: any) {
    } finally {
    }
};