import React, { createContext, useState } from "react";
export const CountContext = createContext(0 as number);

const CounterContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CountContext.Provider value={count}>{children}</CountContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
