import { createContext, useReducer, useState } from "react";
import { produce } from "immer";
import { counterReducer } from "@/reducers[draft]/CounterReducer";
export const CounterContext = createContext({} as any);

type CounterProviderProps = {
    children: React.ReactNode;
};

const initialState = {
    count: 0,
    isLoading: false,
    error: "",
};

const CounterProvider = ({ children }: CounterProviderProps) => {
    const [state, dispatch] = useReducer(produce(counterReducer), initialState);
    return (
        <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
    );
};

export default CounterProvider;
