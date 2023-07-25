import { produce } from "immer";

const initialState = {
    items: []
} as { items: any[] }
export const cartReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            // Fetching
            case "cart/fetching":
                const localStorageData = JSON.parse(localStorage.getItem("cartItems")!);
                if (localStorageData && Array.isArray(localStorageData)) {
                    draftState.items = localStorageData;
                } else {
                    draftState.items = [];
                }
                break;
            // Add
            case "cart/add":
                const newProduct = action.payload;
                const existProductIndex = draftState.items.findIndex(item => item.id === newProduct.id);
                console.log(existProductIndex)
                if (existProductIndex === -1) {
                    draftState.items.push(newProduct);
                } else {
                    draftState.items[existProductIndex].quantity += newProduct.quantity;
                }
                break;
            case "cart/increment":
                draftState.items.find(item => item.id === action.payload).quantity++;
                break
            case "cart/decrement":
                const items = draftState.items.find(item => item.id === action.payload);
                items.quantity--;
                if (items.quantity < 1) {
                    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?')
                    if (confirm) {
                        draftState.items = draftState.items.filter(item => item.id !== items.id);
                    }
                }
                break;
            case "cart/deleteProduct":
                const id = action.payload;
                draftState.items = state.items.filter(item => item.id !== id);
                break;
            case "cart/deleteAll":
                draftState.items = [];
                break;
            default:
                return state;
        }
    })
}