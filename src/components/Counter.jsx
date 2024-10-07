import { useContext } from "react";
import { CountContext } from "../context/CounterContext";

const Counter = () => {
    const { state, dispatch } = useContext(CountContext);
    console.log(state.count);
    return (
        <div>
            {state.count}
            <div className="flex space-x-5">
                <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
                <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
                    INCREASE
                </button>
            </div>
        </div>
    );
};

export default Counter;
