import { useDispatch, useSelector } from "react-redux";

const Count = () => {
    // const { count, dispatch } = useContext(CountContext);
    const state = useSelector((state) => state as { count: number });
    const dispatch = useDispatch();
    return (
        <div>
            Count {state.count}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>INCREASE</button>
        </div>
    );
};

export default Count;
