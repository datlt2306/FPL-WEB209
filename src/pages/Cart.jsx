import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartPage = () => {
    const { count, dispatch } = useContext(CartContext);
    return (
        <div>
            {count.count}
            <button onClick={() => dispatch({ type: "increment" })}>Click</button>
        </div>
    );
};

export default CartPage;
