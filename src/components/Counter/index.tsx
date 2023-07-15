import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state.counter.count);
    return (
        <div>
            Value: {state}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Click</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Click 2</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>Click 3</button>
        </div>
    );
};

export default Counter;
