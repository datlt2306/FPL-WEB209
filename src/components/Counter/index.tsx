import { ProductContext } from "@/context/productContext";
import React, { useContext } from "react";

type Props = {};

const Counter = (props: Props) => {
    const { count, increment, decrement } = useContext(ProductContext);

    return (
        <div>
            Counter: {count}
            <button className="border border-gray-500 p-2" onClick={() => increment()}>
                Increment
            </button>
            <button className="border border-gray-500 p-2 ml-2" onClick={() => decrement()}>
                Decrement
            </button>
        </div>
    );
};

export default Counter;
