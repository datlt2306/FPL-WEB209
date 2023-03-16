const initialState = {
    value: [],
    isLoading: false,
};

const productReducer = (state = initialState, action: any) => {
    // {type: "GET_PRODUCTS", payload: [ {id: 1, name: "Product A"} ]
    // {type: "CREATE_PRODUCT", payload: {id: 2, name: "Product C"}
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                value: action.payload,
            };
        case "CREATE_PRODUCT":
            return {
                ...state,
                value: [...state.value, action.payload],
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                value: state.value.filter((item) => item.id != action.payload),
            };
        case "UPDATE_PRODUCT":
            return {
                ...state,
                value: state.value.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        default:
            return state;
    }
};
export default productReducer;
