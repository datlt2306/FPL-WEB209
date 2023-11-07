import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import { IProduct } from './interfaces/Product'
import ProductAdd from './components/ProductAdd'

function App() {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, [])
    const onAdd = (product: IProduct) => {
        fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    return (
        <>
            <ProductList products={products} />
            <ProductAdd onAdd={onAdd} />
        </>
    )
}

export default App
