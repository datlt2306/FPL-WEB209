import { produce } from "immer";

const intialState = { products: [], isLoading: false, error: "" } as any;

export const productReducer = (state = intialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            // Fetching
            case "product/fetching":
                draftState.isLoading = true;
                break;
            case "product/fetchingSuccess":
                draftState.products = action.payload;
                draftState.isLoading = false;
                break;
            case "product/fetchingFailed":
                draftState.isLoading = false;
                draftState.error = action.payload
                break;
            case "product/fetchingFinally":
                draftState.isLoading = false;
                break;
            // Adding
            case "product/add":
                draftState.products.push(action.payload);
                break
            case "product/edit":
                const product = action.payload;
                draftState.products = state.products.map((item: any) => item.id === product.id ? product : item)
                break;
            case "product/delete":
                const id = action.payload;
                draftState.products = state.products.filter((item: any) => item.id !== id)
                break;
            default:
                return state;
        }
    })

}