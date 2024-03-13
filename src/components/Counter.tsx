import { useContext } from "react";
import { CountContext } from "../context/CounterContextProvider";
const Counter = () => {
    const [count, setCount] = useContext(CountContext);
    return (
        <div>
            Counter {count}
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

export default Counter;
