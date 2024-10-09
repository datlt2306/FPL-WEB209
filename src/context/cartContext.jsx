/* eslint-disable react/prop-types */
import React, { useReducer } from "react";
const initialState = {
    carts: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "addToCart":
            return { carts: [...state.carts, action.payload] };
        case "removeFromCart":
            return { carts: state.carts.filter((item) => item.id !== action.payload.id) };
        case "updateQuantity":
            return {
                carts: state.carts.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        default:
            return state;
    }
};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const CartContext = React.createContext();
export default CartContextProvider;
