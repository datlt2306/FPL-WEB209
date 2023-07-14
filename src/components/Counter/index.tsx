import { CounterContext } from "@/context/Counter";
import { useContext } from "react";
import { Button } from "..";

const Counter = () => {
    const { state, dispatch } = useContext(CounterContext);
    console.log(state); //  { count: 0, };
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
