export const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            state.products = action.payload;
            return;
        case "ADD_PRODUCT":
            state.products.push(action.payload);
            return;
        case "REMOVE_PRODUCT":
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id);
            return;
        case "UPDATE_PRODUCT":
            const product = action.payload;
            state.products = state.products.map((item: any) =>
                item.id === product.id ? product : item
            );
            return;
        default:
            return state;
    }
};