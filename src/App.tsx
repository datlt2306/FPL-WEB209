import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import { IProduct } from './interfaces/Product'

function App() {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, [])
    return (
        <>
            <ProductList products={products} />
        </>
    )
}

export default App
