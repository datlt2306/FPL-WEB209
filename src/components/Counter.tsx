import { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Counter = () => {
    const { state, dispatch } = useContext(CounterContext)
    return (
        <div>
            Counter - {state.count}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: 'INCREASE', payload: 12 })}>INCREASE</button>
        </div>
    )
}

export default Counter
