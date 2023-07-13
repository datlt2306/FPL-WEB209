import { CounterContext } from "@/context/CounterProvider";
import { useContext } from "react";

const Counter = () => {
    const { state, dispatch } = useContext(CounterContext);
    console.log("state", state); // { count: 0}
    return (
        <div>
            Counter: {state.count}
            <button
                className="border border-gray-500 p-2"
                onClick={() => dispatch({ type: "INCREMENT" })}
            >
                Increment
            </button>
            <button
                className="border border-gray-500 p-2 ml-2"
                onClick={() => dispatch({ type: "DECREMENT" })}
            >
                Decrement
            </button>
            <button
                className="border border-gray-500 p-2 ml-2"
                onClick={() => dispatch({ type: "INCREASE", payload: 10 })}
            >
                Increase
            </button>
        </div>
    );
};

export default Counter;
