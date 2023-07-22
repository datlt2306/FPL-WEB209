import { produce } from "immer";

const initialState = {
    items: []
} as { items: any[] }

const cartReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "cart/add":
                // Tìm index sản phẩm trong giỏ hàng
                const existProductIndex = draftState.items.findIndex(item => item.id === action.payload.id);
                // Nếu không có sản phẩm nào trong giỏ hàng thì thêm sản phẩm vừa click add
                if (existProductIndex === -1) {
                    draftState.items.push(action.payload)
                } else {
                    // Ngược lại thì cập nhật số lượng, dựa theo index mới tìm được
                    draftState.items[existProductIndex].quantity++
                }
                break;
            case "cart/increase":
                draftState.items.find((item: any) => item.id === action.payload).quantity++
                break;
            case "cart/decrease":
                // Tìm sản phẩm dựa vào object id mình vừa click
                const foundProduct = draftState.items.find((item: any) => item.id === action.payload)
                // Nếu có sản phẩm trong giỏ hàng thì giảm số lượng
                foundProduct.quantity--;
                // Nếu số lượng giảm dưới 1 thì xóa
                if (foundProduct.quantity < 1) {
                    const confirm = window.confirm('Bạn có chắc chắn muốn xóa?');
                    // nếu confirm được chọn là true thì xóa
                    if (confirm) draftState.items = draftState.items.filter(item => item.id !== foundProduct.id);
                    // Nếu confirm được chọn là cancel thì set lại số lượng sp = 1
                    foundProduct.quantity = 1
                }
                break;
            default:
                return state;
        }
    })
}

export default cartReducer;