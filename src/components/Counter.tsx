import { useContext } from 'react'
import { CounterContext } from '../context/counter'

const Counter = () => {
    const { state, dispatch } = useContext(CounterContext)
    return (
        <div>
            {state.count}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: 'INCREASE', payload: 12 })}>INCREASE</button>
        </div>
    )
}

export default Counter
