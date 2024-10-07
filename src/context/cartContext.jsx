/* eslint-disable react/prop-types */
import React, { useState } from "react";

const CartContextProvider = ({ children }) => {
    const [cart] = useState([
        {
            id: 1,
            products: [
                {
                    id: 1,
                    name: "product 1",
                    price: 100,
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "product 2",
                    price: 200,
                    quantity: 2,
                },
            ],
        },
    ]);
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const CartContext = React.createContext();
export default CartContextProvider;
