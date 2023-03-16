import { IActionProduct, IProduct } from "../interfaces/Product";

const initialState: { value: IProduct[]; isLoading: boolean } = {
    value: [],
    isLoading: false,
};

const productReducer = (state = initialState, action: IActionProduct) => {
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
                value: state.value.filter((item: IProduct) => item.id != action.payload),
            };
        case "UPDATE_PRODUCT":
            return {
                ...state,
                value: state.value.map((item: IProduct) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        default:
            return state;
    }
};
export default productReducer;
