import { createContext, useReducer, useState } from "react";

export const CounterContext = createContext({} as any);

type CounterProviderProps = {
    children: React.ReactNode;
};

const initialState = {
    count: 0,
};
const counterReducer = (state: any, action: any) => {
    console.log("action", action);
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

const CounterProvider = ({ children }: CounterProviderProps) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    // const [count, setCount] = useState<number>(55);

    // const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
    );
};

export default CounterProvider;
