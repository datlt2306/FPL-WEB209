import { useEffect, useState } from 'react'
import './App.css'
import { IProduct } from './interfaces/Product'
function App() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        ;(async () => {
            try {
                setIsLoading(true)
                const data = await (await fetch(`http://localhost:3000/products`)).json()
                setProducts(data)
            } catch (error) {
                console.log('[GET_PRODUCTS_ERROR]', error)
                setError((error as Error).message)
            } finally {
                setIsLoading(false)
            }
        })()
    }, [])

    if (error) return <div>{error}</div>
    if (isLoading) return <div>Loading...</div>
    return <>{products?.map((product, index) => <div key={index}>{product.name}</div>)}</>
}

export default App
