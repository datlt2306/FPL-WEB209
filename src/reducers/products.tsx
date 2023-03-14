const initialState = {
    value: [],
    isLoading: false,
};

const productReducer = (state = initialState, action: any) => {
    // action.payload = [ {id: 1, name: "Product A"} ]
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                value: action.payload,
            };
        default:
            return state;
    }
};
export default productReducer;
