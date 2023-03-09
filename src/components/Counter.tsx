import React from "react";
import { useSelector } from "react-redux";
import { ICounter } from "../interfaces/Counter";
type Props = {};

const Counter = () => {
    const counter = useSelector((state: ICounter) => state.count);
    return <div>{counter}</div>;
};

export default Counter;
