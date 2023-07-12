import { createContext, useState } from "react";

export const CounterContext = createContext({} as any);

const CounterProvider = ({ children }: any) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};
export default CounterProvider;
