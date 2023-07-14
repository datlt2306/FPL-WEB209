import { createContext, useReducer, useState } from "react";
import { produce } from "immer";
export const CounterContext = createContext({} as any);

type CounterProviderProps = {
    children: React.ReactNode;
};

const initialState = {
    count: 0,
    isLoading: false,
    error: "",
};
const counterReducer = (state: any, action: any) => {
    console.log("action", action);
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

const CounterProvider = ({ children }: CounterProviderProps) => {
    const [state, dispatch] = useReducer(produce(counterReducer), initialState);
    // const [count, setCount] = useState<number>(55);

    // const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
    );
};

export default CounterProvider;
