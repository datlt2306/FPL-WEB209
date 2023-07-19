import { instance } from "@/axios/config";
import { pause } from "@/utils/pause";
// action creator

export const fetchProducts = () => async (dispatch: any) => {
    dispatch({ type: "product/fetching" }) // isLoading: true
    try {
        await pause(2000);
        const data = await instance.get("/products");
        // gửi 1 action vào reducer, giá trị là 1 plain object
        dispatch({ type: "product/fetchingSuccess", payload: data });
    } catch (error: any) {
        dispatch({ type: "product/fetchingFailed", payload: error.message })
    } finally {
        dispatch({ type: "product/fetchingFinally" })
    }
};
export const addProduct = (product: any) => async (dispatch: any) => {
    try {
        const data = await instance.post("/products", product);
        dispatch({ type: "product/addProduct", payload: data });
    } catch (error: any) {
    } finally {
    }
};
export const removeProduct = (id: any) => async (dispatch: any) => {
    try {
        await instance.delete(`/products/${id}`);
        dispatch({ type: "product/deleteProduct", payload: id });
    } catch (error: any) {
    } finally {
    }
};
export const updateProduct = (product: any) => async (dispatch: any) => {
    try {
        const data = await instance.put(`/products/${product.id}`, product);

        console.log(data);
        dispatch({ type: "product/updateProduct", payload: data });
    } catch (error: any) {
    } finally {
    }
};
