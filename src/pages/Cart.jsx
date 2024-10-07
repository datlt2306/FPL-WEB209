import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () => {
    const { state, dispatch } = useContext(CartContext);
    console.log(state.carts);
    return (
        <div>
            <button onClick={() => dispatch({ type: "addToCart", payload: { id: 1, name: "A" } })}>
                Add to cart
            </button>
        </div>
    );
};

export default CartPage;
