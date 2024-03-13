import React, { ReactNode, createContext, useState } from "react";

export const CouterContext = createContext({});
type CounterContextProviderProps = {
    children: ReactNode;
};

const CounterContextProvider = ({ children }: CounterContextProviderProps) => {
    const [count, setCount] = useState(10);
    return (
        <div>
            <CouterContext.Provider value={{ count, setCount }}>{children}</CouterContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
