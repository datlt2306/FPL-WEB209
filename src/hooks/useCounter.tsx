import { useState } from 'react'

export const useCounter = (initState = 0) => {
    const [count, setCount] = useState(initState)

    const increment = () => {
        setCount(count + 1)
    }
    const decrenment = () => {
        setCount(count - 1)
    }
    return { count, increment, decrenment }
}
