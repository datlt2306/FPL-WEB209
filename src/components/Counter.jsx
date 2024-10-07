import { useContext } from "react";
import { CountContext } from "../context/CounterContext";

const Counter = () => {
    const state = useContext(CountContext);
    console.log(state);
    return <div>{state}</div>;
};

export default Counter;
