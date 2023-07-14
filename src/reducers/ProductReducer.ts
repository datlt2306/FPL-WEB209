export const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            state.products = action.payload
            return;
        default:
            return state;
    }
}

// call api => data
// setProduct(data)
// dispatch({type: "FETCH_PRODUCTS", payload: data})