import axios from "axios";
// action creator
export const fetchProducts = () => async (dispatch: any) => {
    // loading = true
    try {
        const { data } = await axios.get("http://localhost:3000/products");
        dispatch({ type: "products/fetchProducts", payload: data });
        return data
    } catch (error: any) {
        // error.message
        return error.message
    } finally {
        // loading = false
    }
};

export const addProduct = (product: any) => async (dispatch: any) => {
    try {
        // call api
        const { data } = await axios.post("http://localhost:3000/products", product);
        // rerender
        dispatch({ type: "products/addProduct", payload: data });
    } catch (error) { }
};
export const updateProduct = (product: any) => async (dispatch: any) => {
    try {
        // call api
        const { data } = await axios.put(
            "http://localhost:3000/products/" + product.id,
            product
        );
        console.log("data", data);
        // rerender
        dispatch({ type: "products/updateProduct", payload: data });
    } catch (error) { }
};
export const deleteProduct = (id: any) => async (dispatch: any) => {
    try {
        // call api
        await axios.delete("http://localhost:3000/products/" + id);
        // rerender
        dispatch({ type: "products/deleteProduct", payload: id });
    } catch (error) { }
};

// Component => dispatch => actions(middleware) => dispatch => reducers

