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

/// add 
// update
// delete