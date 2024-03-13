import React, { useContext } from "react";
import { CountContext } from "../contexts/CounterContextProvider";

const Count = () => {
    const count = useContext(CountContext);
    return <div>Count {count}</div>;
};

export default Count;
