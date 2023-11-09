import { createContext, useState } from 'react'

export const CounterContext = createContext({} as any)

const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [count] = useState(20)
    return <CounterContext.Provider value={{ count }}>{children}</CounterContext.Provider>
}
export default CounterContextProvider
