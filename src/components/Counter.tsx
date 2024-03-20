import { useContext, useState } from "react";
import { CountContext } from "../context/CounterContextProvider";
const Counter = () => {
    // const { count, dispatch } = useContext(CountContext);
    const [count, setCount] = useState(0);
    return (
        <div>
            Counter {count.value}
            <button onClick={() => setCount(count + 1)}>INCREMENT</button>
            <button onClick={() => setCount(count - 1)}>INCREMENT</button>
        </div>
    );
};

export default Counter;
