import { produce } from "immer";

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[]; isLoading: boolean; error: string }
export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            // Fetching
            case "products/fetching":
                draftState.isLoading = true;
                break
            case "products/fetchingSuccess":
                draftState.products = action.payload;
                break
            case "products/fetchingFailed":
                draftState.error = action.payload;
                break;
            case "products/fetchingFinally":
                draftState.isLoading = false;
                break;
            // Add
            case "products/addProduct":
                draftState.products.push(action.payload);
                break;
            case "products/updateProduct":
                const product = action.payload;
                draftState.products = draftState.products.map((item: any) => item.id === product.id ? product : item);
                // draftState.products[action.payload.id] = action.payload;
                break;
            case "products/deleteProduct":
                const id = action.payload;
                draftState.products = draftState.products.filter(item => item.id !== id);
                break;
            default:
                return state;
        }
    })
}