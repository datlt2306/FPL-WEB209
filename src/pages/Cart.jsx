import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () => {
    const cart = useContext(CartContext);
    console.log(cart);
    return <div>Cart</div>;
};

export default CartPage;
