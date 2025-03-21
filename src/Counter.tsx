import { useCounter } from "./hooks/useCounter";

const Counter = () => {
    const { count, increment, decrement } = useCounter();
    return (
        <div>
            Count{count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
