import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        ;(async () => {
            try {
                setLoading(true)
                const data = await (await fetch('http://localhost:3000/products')).json()
                setProducts(data)
            } catch (error) {
                setError((error as Error).message)
            } finally {
                setLoading(false)
            }
        })()
    }, [])
    if (error) return <div>{error}</div>
    if (loading) return <div>...loading</div>
    return <>{products?.map((product: any, index) => <div key={index}>{product.name}</div>)}</>
}

export default App
