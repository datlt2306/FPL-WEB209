// call api => data
// setProducts(data) => dispatch({type: "FETCH_PRODUCTS", payload: data})

export const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            state.products = action.payload;
            return;
        case "ADD_PRODUCT":
            state.products.push(action.payload);
            return;
        default:
            return state;
    }
}