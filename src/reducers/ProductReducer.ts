import { produce } from "immer";


const initialState = {
    products: [] as any[],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string };

/**
 * Reducer function for the product state.
 *
 * @param {any} state - The current state of the product.
 * @param {any} action - The action to be performed on the state.
 * @return {any} The updated state after applying the action.
 */
export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            // action: { type: "product/fetchProducts", payload: data 
            case "product/fetchProducts":
                draftState.products = action.payload
                break;
            case "product/addProduct":
                draftState.products.push(action.payload);
                break;
            case "product/updateProduct":
                const product = action.payload
                draftState.products = state.products.map((item: any) => item.id === product.id ? product : item)
                // draftState.products[product.id] = product;
                break;
            case "product/deleteProduct":
                const id = action.payload;
                draftState.products = state.products.filter((item: any) => item.id !== id)
                break;
            default:
                return state;
        }
    })

}
