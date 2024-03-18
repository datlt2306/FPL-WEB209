import { ReactNode, createContext, useReducer } from "react";
import { IProduct } from "../interfaces/Product";
import { produce } from "immer";

type State = {
    value: IProduct[];
};
type Action =
    | { type: "SET_PRODUCTS"; payload: IProduct[] }
    | { type: "DELETE_PRODUCT"; payload: number }
    | { type: "ADD_PRODUCT"; payload: IProduct }
    | { type: "UPDATE_PRODUCT"; payload: IProduct };
const initialState = {
    value: [],
    isLoading: false,
    error: "",
} as State;

export const ProductContext = createContext([] as any);

type Props = {
    children: ReactNode;
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            state.value = action.payload;
            break;
        case "ADD_PRODUCT":
            state.value.push(action.payload);
            break;
        case "DELETE_PRODUCT":
            const id = action.payload;
            state.value = state.value.filter((item) => item.id !== id);
            break;
        case "UPDATE_PRODUCT":
            // { id: 3, name: "A"}
            const newProduct = action.payload;
            const productToUpdate = state.value.find((item) => item.id == newProduct.id);
            if (productToUpdate) {
                Object.assign(productToUpdate, newProduct);
            }
            break;
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }: Props) => {
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
