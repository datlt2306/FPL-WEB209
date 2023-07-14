import { createContext, useReducer, useState } from "react";

export const CounterContext = createContext({} as any);

const initialState = {
    count: 10,
};
const reducer = (state: any, action: any) => {
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
const CounterProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const [count, setCount] = useState<number>(0);

    // const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
    );
};
export default CounterProvider;
