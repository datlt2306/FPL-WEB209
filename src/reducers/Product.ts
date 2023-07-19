import { produce } from 'immer'
const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string };

export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            // FETCH
            case "product/fetching":
                draftState.isLoading = true;
                break;
            case "product/fetchingSucess":
                draftState.products = action.payload;
                draftState.isLoading = false
                break;
            case "product/fetchingFailed":
                draftState.error = action.payload;
                break;
            case "product/fetchingFinally":
                draftState.isLoading = false;
                break;
            // ADD
            case "product/addProduct":
                draftState.products.push(action.payload);
                break;
            case "product/updateProduct":
                const product = action.payload;
                // state.products[action.payload.id] = action.payload;
                draftState.products = state.products.map((item: any) => item.id === product.id ? product : item);
                break;
            case "product/deleteProduct":
                const id = action.payload;
                draftState.products = state.products.filter((item: any) => item.id !== id);
                break;
            default:
                return state;
        }
    })

}