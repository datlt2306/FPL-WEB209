import { createContext, useReducer } from 'react'
import { produce } from 'immer'

export const CounterContext = createContext({} as any)
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            state.count++
            return
        case 'DECREMENT':
            state.count--
            return
        case 'INCREASE':
            state.count += action.payload
            return
        default:
            return state
    }
}
const CounterContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(produce(reducer), { count: 0 })

    return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}
export default CounterContextProvider
