import React, { createContext, useState } from "react";
export const CountContext = createContext({} as any);

const CounterContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
