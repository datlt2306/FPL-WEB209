import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
    const { count } = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();
    // dispatch nhận giá trị là 1 plain object : { key: value }
    return (
        <div>
            Counter {count}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>DECREMENT</button>
        </div>
    );
};

export default Counter;
