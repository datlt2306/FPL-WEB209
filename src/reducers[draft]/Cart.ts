import { produce } from "immer";

const initialState = {
    items: []
} as { items: any[] }

const cartReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "cart/add":
                const existProductIndex = draftState.items.findIndex(item => item.id === action.payload.id);
                if (existProductIndex === -1) {
                    draftState.items.push(action.payload)
                } else {
                    draftState.items[existProductIndex].quantity++
                }
                break;
            case "cart/increase":
                draftState.items.find((item: any) => item.id === action.payload).quantity++
                break;
            case "cart/decrease":
                const foundProduct = draftState.items.find((item: any) => item.id === action.payload)
                foundProduct.quantity--;
                if (foundProduct.quantity < 1) {
                    const confirm = window.confirm('Bạn có chắc chắn muốn xóa?');
                    if (confirm) draftState.items = draftState.items.filter(item => item.id !== foundProduct.id);
                    foundProduct.quantity = 1
                }
                break;
            default:
                return state;
        }
    })
}

export default cartReducer;