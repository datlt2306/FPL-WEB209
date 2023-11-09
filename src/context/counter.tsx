import { createContext, useState } from 'react'

export const CounterContext = createContext({} as any)

const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [count, setCount] = useState(20)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const increase = (value: number) => {
        setCount(count + value)
    }

    return (
        <CounterContext.Provider value={{ count, increment, decrement, increase }}>{children}</CounterContext.Provider>
    )
}
export default CounterContextProvider
