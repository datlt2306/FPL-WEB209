import { CounterContext } from "@/context/CounterProvider";
import React, { useContext } from "react";
import { Button } from "..";

const Counter = () => {
    const { state, dispatch } = useContext(CounterContext);
    return (
        <div>
            Counter: {state.count}
            <Button type="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </Button>
            <Button type="primary" onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </Button>
            <Button type="primary" onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
                Increase
            </Button>
        </div>
    );
};

export default Counter;
