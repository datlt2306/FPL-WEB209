/* eslint-disable react/prop-types */
import React, { useReducer } from "react";
const initialState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "increase": {
            return { count: state.count + action.payload };
        }
        default:
            return state;
    }
};
const CartContextProvider = ({ children }) => {
    const [count, dispatch] = useReducer(counterReducer, initialState);
    // const [cart] = useState([
    //     {
    //         id: 1,
    //         products: [
    //             {
    //                 id: 1,
    //                 name: "product 1",
    //                 price: 100,
    //                 quantity: 1,
    //             },
    //             {
    //                 id: 2,
    //                 name: "product 2",
    //                 price: 200,
    //                 quantity: 2,
    //             },
    //         ],
    //     },
    // ]);
    return <CartContext.Provider value={{ count, dispatch }}>{children}</CartContext.Provider>;
};

export const CartContext = React.createContext();
export default CartContextProvider;
