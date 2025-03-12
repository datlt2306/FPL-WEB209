import React from "react";

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>
                Count
                <span>{count}</span>
            </p>
        </div>
    );
};

export default Counter;
