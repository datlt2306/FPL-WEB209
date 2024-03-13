import React, { useContext } from "react";
import { CouterContext } from "../context/CounterContextProvider";
const Counter = () => {
    const { count, setCount } = useContext(CouterContext);
    console.log(count); // { count: 10, setCount: ƒ }
    return (
        <div>
            Counter {count} <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

export default Counter;
