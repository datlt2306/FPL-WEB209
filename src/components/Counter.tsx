import React, { useContext } from "react";
import { CouterContext } from "../context/CounterContextProvider";
const Counter = () => {
    const count = useContext(CouterContext);
    return <div>Counter {count}</div>;
};

export default Counter;
