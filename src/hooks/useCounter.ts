import { useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const increase = (value) => {
        setCount(count + value);
    };

    return { count, increment, decrement, increase }
}
export default useCounter;