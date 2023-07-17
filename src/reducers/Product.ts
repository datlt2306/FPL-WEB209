// call api => data
// setProducts(data) => dispatch({type: "FETCH_PRODUCTS", payload: data})

export const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "product/fetchProducts":
            state.products = action.payload;
            break;
        case "product/addProduct":
            state.products.push(action.payload);
            break;
        case "product/updateProduct":
            const product = action.payload;
            console.log('product', product);
            // state.products[action.payload.id] = action.payload;
            state.products = state.products.map((item: any) => item.id === product.id ? product : item);
            break;
        case "product/deleteProduct":
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id);
            break;
        default:
            return state;
    }
}