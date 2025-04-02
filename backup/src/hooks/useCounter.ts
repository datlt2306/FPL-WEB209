import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(10);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return { count, increment, decrement };
}