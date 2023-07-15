import { CounterContext } from "@/context/Counter";
import React, { useContext } from "react";

type Props = {};

const Counter = () => {
    const { state, dispatch } = useContext(CounterContext);
    console.log(state); // { count: 0}
    return (
        <div>
            Counter {state.count}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>DECREMENT</button>
        </div>
    );
};

export default Counter;
