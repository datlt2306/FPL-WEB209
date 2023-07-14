import { CounterContext } from "@/context/CounterContext";
import { useContext } from "react";
import { Button } from "..";

const Counter = () => {
    // const { count, increment, decrement } = useContext(CounterContext);
    const { state, dispatch } = useContext(CounterContext);
    console.log(state);
    return (
        <div>
            Counter: {state?.count}
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

// function reducer(state, action){

// }
// reducer(state, action)
