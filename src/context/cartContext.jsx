/* eslint-disable react/prop-types */
import React, { useReducer } from "react";
const initialState = {
    carts: [],
};

const counterReducer = (state, action) => {
    console.log(state.carts);
    console.log("action.payload", action.payload);
    switch (action.type) {
        case "addToCart":
            return { carts: [...state.carts, action.payload] };
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
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const CartContext = React.createContext();
export default CartContextProvider;
