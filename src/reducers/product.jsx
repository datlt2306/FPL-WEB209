const initialState = {
    products: [
        {id: 1, name: "Product A", price: 400},
        {id: 2, name: "Product B", price: 400},
        {id: 3, name: "Product C", price: 500}
    ]
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            console.log('ADD');
            return [...state.products, action.payload];
        default:
            return state;
    }
}
export default productReducer