/* eslint-disable react/prop-types */
import React, { useReducer, useState } from "react";
export const CountContext = React.createContext();

const reducer = (state, action) => {
    console.log("action", action);
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "INCREASE":
            return { count: state.count + action.payload };
        default:
            return state;
    }
};
const CounterContext = (props) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <CountContext.Provider value={{ state, dispatch }}>
                {props?.children}
            </CountContext.Provider>
        </div>
    );
};

export default CounterContext;