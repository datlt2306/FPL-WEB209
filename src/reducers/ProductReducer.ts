import { produce } from "immer";

const initialState: { products: [], isLoading: boolean, error: string } = {
    products: [],
    isLoading: false,
    error: ""
}

export const productReducer = (state = initialState as any, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
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
