import React, { ReactNode, createContext, useReducer, useState } from "react";

type Props = {
    children: ReactNode;
};
export const CountContext = createContext({} as any);

const initialState = {
    value: 10,
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return { value: state.value + 1 };
        case "DECREMENT":
            return { value: state.value - 1 };
        case "INCREASE":
            return { value: state.value + action.payload };
        default:
            return state;
    }
};

const CounterContextProvider = ({ children }: Props) => {
    // const [count, setCount] = useState(10);
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <CountContext.Provider value={{ count, dispatch }}>{children}</CountContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
