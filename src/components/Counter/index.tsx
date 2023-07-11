import { CounterContext } from "@/context";
import React, { useContext } from "react";

type Props = {};

const Counter = (props: Props) => {
    const { count, increment, decrement } = useContext(CounterContext);
    return (
        <div>
            Counter: {count}
            <button onClick={() => increment()}>Increase</button>
            <button onClick={() => decrement()}>Decrease</button>
        </div>
    );
};

export default Counter;
