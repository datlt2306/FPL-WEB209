import React, { ReactNode, createContext, useState } from "react";

export const CouterContext = createContext(0);
type CounterContextProviderProps = {
    children: ReactNode;
};

const CounterContextProvider = ({ children }: CounterContextProviderProps) => {
    const [count] = useState(10);
    return (
        <div>
            <CouterContext.Provider value={count}>{children}</CouterContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
