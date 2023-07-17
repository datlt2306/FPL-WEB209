import { createContext, useReducer, useState } from "react";
import { produce } from "immer";

export const CounterContext = createContext({} as any);

const initialState = {
    count: 10,
    isLoading: false,
};
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            state.count++;
            return;
        case "DECREMENT":
            state.count--;
            return;
        case "INCREASE":
            state.count += action.payload;
            return;
        default:
            return state;
    }
};
const CounterProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(produce(reducer), initialState);

    // const [count, setCount] = useState<number>(0);

    // const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
    );
};
export default CounterProvider;
