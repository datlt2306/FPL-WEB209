import { ReactNode, createContext, useReducer } from "react";
import { IProduct } from "../interfaces/Product";

const initialState = {
    value: [] as IProduct[],
};
export const ProductContext = createContext({} as { products: IProduct[]; dispatch: Function });

type Props = {
    children: ReactNode;
};

const reducer = (state: { value: IProduct[] }, action: any) => {
    // action.type = "SET_PRODUCTS"
    // action.payload = [{},{}]
    console.log("action", action);
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                value: action.payload,
            };
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }: Props) => {
    const [products, dispatch] = useReducer(reducer, initialState);

    // const onHandleAdd = async (product: IProduct) => {
    //     try {
    //         const data = await addProduct(product);
    //         setProducts([...products, data]);
    //     } catch (error) {}
    // };
    // const onHandleEdit = async (product: IProduct) => {
    //     try {
    //         const data = await editProduct(product);
    //         setProducts(products.map((item) => (item.id == data.id ? data : item)));
    //     } catch (error) {}
    // };
    // const onHandleRemove = async (id: number) => {
    //     try {
    //         const data = await removeProduct(id);
    //         setProducts(products.filter((item) => item.id !== id));
    //     } catch (error) {}
    // };
    return (
        <div>
            <ProductContext.Provider value={{ products, dispatch }}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;
