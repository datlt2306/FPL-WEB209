import { createContext, useReducer } from "react";
import { IProduct } from "../interfaces/Product";
import { produce } from "immer";

type State = {
    value: IProduct[];
};
// ENUM
type Action =
    | { type: "SET_PRODUCTS"; payload: IProduct[] }
    | { type: "DELETE_PRODUCT"; payload: number }
    | { type: "ADD_PRODUCT"; payload: IProduct }
    | { type: "UPDATE_PRODUCT"; payload: IProduct };
const initialState = {
    value: [],
    isLoading: true,
    error: "",
} as State;
export const ProductContext = createContext({} as any);

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            state.value = action.payload;
            break;
        case "DELETE_PRODUCT":
            state.value = state.value.filter((item) => item.id !== action.payload);
            break;
        case "ADD_PRODUCT":
            state.value.push(action.payload);
            break;
        case "UPDATE_PRODUCT":
            const newProduct = action.payload;
            state.value = state.value.map((item) =>
                item.id === newProduct.id ? newProduct : item
            );
            break;
    }
};

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, dispatch] = useReducer(produce(reducer), initialState);

    return (
        <div>
            <ProductContext.Provider value={[products, dispatch]}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;
