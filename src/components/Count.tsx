import React, { useContext } from "react";
import { CountContext } from "../contexts/CounterContextProvider";

const Count = () => {
    const { count, dispatch } = useContext(CountContext);
    return (
        <div>
            Count {count.count}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>INCREASE</button>
        </div>
    );
};

export default Count;
