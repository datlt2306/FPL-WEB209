import { CounterContext } from "@/context/CounterContext";
import { useContext } from "react";
import { Button } from "..";

const Counter = () => {
    const { count, increment, decrement } = useContext(CounterContext);
    return (
        <div>
            Counter: {count}
            <Button type="primary" onClick={() => increment()}>
                Increment
            </Button>
            <Button type="primary" onClick={() => decrement()}>
                Decrement
            </Button>
        </div>
    );
};

export default Counter;
