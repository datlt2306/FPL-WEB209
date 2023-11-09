import { useContext } from 'react'
import { CounterContext } from '../../context/counter'

const Counter = () => {
    const { count, increment, decrement, increase } = useContext(CounterContext)
    return (
        <div>
            Counter {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Increment</button>
            <button onClick={() => increase(10)}>Increase</button>
        </div>
    )
}

export default Counter
