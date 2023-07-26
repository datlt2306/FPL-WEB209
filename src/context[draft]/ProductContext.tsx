import { productReducer } from "@/reducers[draft]/ProductReducer";
import { produce } from "immer";
import { createContext, useReducer } from "react";

export const ProductContext = createContext({} as any);

type ProductProviderProps = {
    children: React.ReactNode;
};
const initialState = {
    products: [],
    isLoading: false,
    error: "",
};
const ProductProvider = ({ children }: ProductProviderProps) => {
    const [state, dispatch] = useReducer(produce(productReducer), initialState);
    return (
        <ProductContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
