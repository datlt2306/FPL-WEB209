import { createContext, useReducer } from 'react'

export const CounterContext = createContext({} as any)
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'INCREASE':
            return { count: state.count + action.payload }
        default:
            return state
    }
}
const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}
export default CounterContextProvider
