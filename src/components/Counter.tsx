import { useCounter } from '@/hooks/useCounter'

const Counter = () => {
    const { count, increment, decrenment } = useCounter(0)
    return (
        <div>
            {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrenment}>decrement</button>
        </div>
    )
}

export default Counter
