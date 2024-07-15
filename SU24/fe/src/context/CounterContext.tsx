import React, { createContext, useState } from "react";
export const CountContext = createContext(0);
const CounterProvider = ({ children }: { children: React.ReactNode }) => {
    const [count] = useState(10);
    return (
        <CountContext.Provider value={count}>{children}</CountContext.Provider>
    );
};

export default CounterProvider;
