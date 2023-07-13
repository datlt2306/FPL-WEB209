//         App -- State
//     | props
// List     Add     Edit
// Item
// ContextAPI - share state các component

import { createContext, useReducer } from "react";

// 1. Tạo context

export const ProductContext = createContext({} as any);

const initialState = {
    products: [],
    isLoading: false,
    error: "",
};

const productReducer = (state: any, action: any) => {
    // action: { type: "FETCH_PRODUCTS", payload: []}
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        default:
            return state;
    }
};

const ProductProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    // const [products, setProducts] = useState([] as any);

    // const addProduct = async (product: any) => {
    //     try {
    //         // call api
    //         const { data } = await axios.post(`http://localhost:3000/products/${product}`);
    //         // rerender
    //         setProducts([...products, data]);
    //     } catch (error: any) {
    //         console.log(error.message);
    //     }
    // };
    // const editProduct = async (product: any) => {
    //     try {
    //         // call api
    //         const { data } = await axios.put(`http://localhost:3000/products/${product.id}`);
    //         // rerender
    //         setProducts(products.map((item: any) => (item.id === data.id ? data : item)));
    //     } catch (error: any) {
    //         console.log(error.message);
    //     }
    // };
    // const deleteProduct = async (product: any) => {
    //     try {
    //         // call api
    //         await axios.delete(`http://localhost:3000/products/${product.id}`);
    //         // rerender
    //         setProducts(products.filter((item: any) => item.id !== product.id));
    //     } catch (error: any) {
    //         console.log(error.message);
    //     }
    // };
    // const fetchProduct = async () => {
    //     try {
    //         const { data } = await axios.get(`http://localhost:3000/products`);
    //         setProducts(data);
    //     } catch (error) {}
    // };
    return (
        <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
    );
};
export default ProductProvider;
