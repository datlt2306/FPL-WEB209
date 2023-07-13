import { createContext, useReducer } from "react";

const ProductContext = createContext([]);

const initialState = {
    products: [],
    isLoading: false,
    error: "",
};
const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

const ProductProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    return (
        <ProductContext.Provider value={{ state, dispatch } as any}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductProvider };
export default ProductContext;
