import React, { useContext } from "react";
import { CountContext } from "../contexts/CounterContextProvider";

const Count = () => {
    const { count, setCount } = useContext(CountContext);
    return (
        <div>
            Count {count}
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

export default Count;
