import { createContext, useState } from "react";

export const CounterContext = createContext({} as any);

// B1: Tạo context sử dụng createContext()
// B2: Wrapper App để share giá trị cho các component
// B3: Sử dụng Context: hooks useContext(context)

type CounterProviderProps = {
    children: React.ReactNode;
};

const CounterProvider = ({ children }: CounterProviderProps) => {
    const [count, setCount] = useState<number>(55);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;
