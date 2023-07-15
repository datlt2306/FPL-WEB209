import { createContext, useReducer } from "react";
import { produce } from "immer";
import { productReducer } from "@/reducers/Product";

const ProductContext = createContext([]);

const initialState = {
    products: [],
    isLoading: false,
    error: "",
};

const ProductProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(produce(productReducer), initialState);
    return (
        <ProductContext.Provider value={{ state, dispatch } as any}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductProvider };
export default ProductContext;
