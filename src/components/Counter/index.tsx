import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state.counter.count);
    return (
        <div>
            Value: {state}
            <button onClick={() => dispatch({ type: "counter/increment" })}>Click</button>
            <button onClick={() => dispatch({ type: "counter/decrement" })}>Click 2</button>
            <button onClick={() => dispatch({ type: "counter/increase", payload: 10 })}>
                Click 3
            </button>
        </div>
    );
};

export default Counter;
