import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
    // const { state, dispatch } = useContext(CounterContext);
    // console.log(state); // { count: 0}

    // const counter = useSelector((state) => {count: 0});
    const { count } = useSelector((state: any) => state);
    const dispatch = useDispatch();

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
