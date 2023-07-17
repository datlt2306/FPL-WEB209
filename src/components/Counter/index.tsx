import { CounterContext } from "@/context[draft]/CounterContext";
import { useContext } from "react";
import { Button } from "..";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    // const { count, increment, decrement } = useContext(CounterContext);
    // const { state, dispatch } = useContext(CounterContext);
    // state => {count: 0}
    const dispatch = useDispatch();
    const { count } = useSelector((state: any) => state);
    return (
        <div>
            Counter: {count}
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
