import { produce } from "immer";


const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string };
export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            // FETCHING
            case "product/fetching":
                draftState.isLoading = true
                break;
            case "product/fetchingSuccess":
                draftState.products = action.payload
                break;
            case "product/fetchingFailed":
                draftState.error = action.payload
                break;
            case "product/fetchingFinally":
                draftState.isLoading = false
                break;

            // ADD
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


// Bước 1: Cài đặt redux-thunk: pnpm i redux-thunk
// Bước 2: Tích hợp - Sử dụng applyMiddleware(thunk)
// Bước 3: Tạo folder actions -> middleware 
        // Component: dispatch(action) -> action creator -> dispatch -> reducer

// Cài đặt redux dev tool
// Bước 1: Cài đặt extension
// Bước 2: Copy code của thầy vào file store/index.ts