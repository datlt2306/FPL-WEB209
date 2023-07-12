import { CounterContext } from "@/context/Counter";
import { useContext } from "react";
import { Button } from "..";

const Counter = () => {
    const { count, decrement, increment } = useContext(CounterContext);
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
