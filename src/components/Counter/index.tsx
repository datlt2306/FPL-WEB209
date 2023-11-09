import { useContext } from 'react'
import { CounterContext } from '../../context/counter'

const Counter = () => {
    const { state, dispatch } = useContext(CounterContext)
    return (
        <div>
            Counter {state.count}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'INCREASE', payload: 10 })}>Increase</button>
        </div>
    )
}

export default Counter
