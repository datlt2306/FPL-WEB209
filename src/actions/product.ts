import { pause } from "@/utils/pause";
import axios from "axios";
export const fetchProducts = () => async (dispatch: any) => {
    dispatch({ type: "products/fetchProductRequest" }) // isLoading: true
    try {
        // call api
        await pause(1000)
        const { data } = await axios.get(`http://localhost:4000/products`);
        // rerender
        dispatch({ type: "products/fetchProductsSuccess", payload: data });
    } catch (error: any) {
        dispatch({ type: "products/fetchProductsError", payload: error.message });
    }
}
// function sum(a){
//     return function(b){
//         return a + b;
//     }
// }
// const result = sum(30);
// console.log(result(10)); // 40

// // currying
// // clousure