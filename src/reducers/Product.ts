import { produce } from 'immer'
const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string };

export const productReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "product/fetchProducts":
                drafState.products = action.payload;
                break;
            case "product/addProduct":
                drafState.products.push(action.payload);
                break;
            case "product/updateProduct":
                const product = action.payload;
                // state.products[action.payload.id] = action.payload;
                drafState.products = state.products.map((item: any) => item.id === product.id ? product : item);
                break;
            case "product/deleteProduct":
                const id = action.payload;
                drafState.products = state.products.filter((item: any) => item.id !== id);
                break;
            default:
                return state;
        }
    })

}