import { produce } from "immer";

const intialState = {
    items: [],
    total: 0
} as { items: any[], total: number };


const cartReducer = (state = intialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "cart/add":
                const newProduct = action.payload;
                // Kiểm tra sản phẩm có tồn tại không?
                const existProductIndex = draftState.items.findIndex(item => item.id === newProduct.id);
                // nếu giỏ hàng không có sản phẩm trùng id thì trả về -1
                // thêm sản phẩm vào giỏ hàng
                if (existProductIndex < 0) {
                    draftState.items.push(newProduct)
                } else {
                    // ngược lại tăng quantity sản phẩm lên
                    draftState.items[existProductIndex].quantity++;
                }
                break;
            case "cart/increment":
                // tìm sản phẩm trong giỏ hàng trùng với id mà mình click vào
                // nếu trùng thì tăng quantity
                draftState.items.find(item => item.id === action.payload).quantity++
                break;
            case "cart/decrement":
                // tìm sản phẩm trong giỏ hàng trùng với id mà mình click vào
                // nếu trùng thì giảm quantity
                const currentProduct = draftState.items.find(item => item.id === action.payload)
                currentProduct.quantity--;
                // nếu giảm quantity xuống dưới 1 thì xóa
                if (currentProduct.quantity < 1) {
                    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?')
                    if (confirm) {
                        draftState.items = draftState.items.filter(item => item.id !== action.payload)
                    }
                }
                break;
            default:
                return state;
        }
    })
}
export default cartReducer;