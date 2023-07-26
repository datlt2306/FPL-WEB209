import { produce } from "immer";

const intialState = {
    items: []
} as { items: any[] };

const cartReducer = (state = intialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "cart/add":
                // Sản phẩm được thêm vào giỏ hàng
                const product = action.payload;

                // Kiểm tra sản phẩm có tồn tại trong giỏ hàng không
                // Nếu có thì trả về index của sản phẩm trong giỏ hàng
                // Nếu không có sản phẩm thì trả về -1 và push sản phẩm vào giỏ háng

                const existProductIndex = draftState.items.findIndex((item: any) => item.id === product.id)
                if (existProductIndex < 0) {
                    draftState.items.push(product);
                } else {
                    draftState.items[existProductIndex].quantity++;
                }
                break;
            case "cart/increase":
                draftState.items.find(item => item.id === action.payload).quantity++;
                break
            case "cart/decrease":
                // Tìm ra sản phẩm trong giỏ hàng
                const currentProduct = draftState.items.find(item => item.id === action.payload);
                // Giảm số lượng sản phẩm
                currentProduct.quantity--;
                // Nếu số lượng sản phẩm ít hơn 1 thì xóa sản phẩm đó khỏi giỏ hàng
                if (currentProduct.quantity < 1) {
                    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?')
                    if (confirm) draftState.items = draftState.items.filter(item => item.id !== currentProduct.id)
                }
                break;
            default:
                return state
        }
    })
}
export default cartReducer