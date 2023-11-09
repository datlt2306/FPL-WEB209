import { useContext } from 'react'
import { CounterContext } from '../../context/counter'

const Counter = () => {
    const result = useContext(CounterContext)
    console.log(result)
    return <div>Counter</div>
}

export default Counter
