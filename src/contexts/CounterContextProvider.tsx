import React, { ReactNode, createContext, useReducer, useState } from "react";

// context
export const CountContext = createContext({} as any);
// reducer

const reducer = (state: { count: number }, action) => {
    console.log(action);
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
            };
        case "DECREMENT":
            return {
                count: state.count - 1,
            };
        case "INCREASE":
            return {
                count: state.count + action.payload,
            };
        default:
            return state;
    }
};

const CounterContextProvider = ({ children }: { children: ReactNode }) => {
    const [count, dispatch] = useReducer(reducer, { count: 0 });
    console.log(count);

    return (
        <div>
            <CountContext.Provider value={{ count, dispatch }}>{children}</CountContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
