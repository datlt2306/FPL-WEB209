import React from "react";
import useCounter from "./hooks/useCounter";

const Counter = () => {
    const { increment, count, decrement } = useCounter();
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
