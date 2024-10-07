/* eslint-disable react/prop-types */
import React, { useState } from "react";
export const CountContext = React.createContext();

const CounterContext = (props) => {
    const [count] = useState(10);
    return (
        <div>
            <CountContext.Provider value={count}>{props?.children}</CountContext.Provider>
        </div>
    );
};

export default CounterContext;
