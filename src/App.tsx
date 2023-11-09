import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import { IProduct } from './interfaces/Product'
import ProductAdd from './components/ProductAdd'
import ProductEdit from './components/ProductEdit'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Counter from './components/Counter'

function App() {
    // const [products, setProducts] = useState<IProduct[]>([])
    // const [product, setProduct] = useState({})

    // useEffect(() => {
    //     fetch(`http://localhost:3000/products`)
    //         .then((response) => response.json())
    //         .then((data) => setProducts(data))
    // }, [])
    // const onAdd = (product: IProduct) => {
    //     fetch(`http://localhost:3000/products`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    //         .then((response) => response.json())
    //         .then((data) => setProducts([...products, data]))
    // }

    // const onGetProduct = (id: number) => {
    //     fetch(`http://localhost:3000/products/${id}`)
    //         .then((response) => response.json())
    //         .then((data) => setProduct(data))
    // }
    // const onEdit = (product: IProduct) => {
    //     fetch(`http://localhost:3000/products/${product.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const newProducts = products.map((item) => (item.id === data.id ? data : item))
    //             setProducts(newProducts)
    //         })
    // }
    // const onSignup = (user: any) => {
    //     fetch(`http://localhost:3000/register`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log('thành công'))
    // }
    // const onSignin = (user: any) => {
    //     fetch(`http://localhost:3000/signin`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log('thành công'))
    // }
    return (
        <>
            <Counter />
            {/* <ProductList products={products} onGetProduct={onGetProduct} />
            <ProductAdd onAdd={onAdd} />
            <Signup onSignup={onSignup} />
            <Signin onSignin={onSignin} />
            <ProductEdit product={product} onEdit={onEdit} /> */}
        </>
    )
}

export default App
