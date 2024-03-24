import { Dispatch } from "redux";

export const setProducts = () => async (dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();
    dispatch({ type: "SET_PRODUCTS", payload: data })
}