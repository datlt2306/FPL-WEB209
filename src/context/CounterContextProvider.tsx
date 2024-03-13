import React, { createContext, useState } from "react";

type Props = {};
export const CountContext = createContext([] as any);
const CounterContextProvider = ({ children }: Props) => {
    const [count, setCount] = useState(10);
    return (
        <div>
            <CountContext.Provider value={[count, setCount]}>{children}</CountContext.Provider>
        </div>
    );
};

export default CounterContextProvider;
