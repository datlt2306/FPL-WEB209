import { useEffect, useState } from 'react'
import './App.css'
import Add from './components/Add'
import { IProduct } from './interfaces/Product'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Edit from './components/Edit'

function App() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [product, setProduct] = useState<IProduct>({})
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
    const onHandleAdd = async (product: IProduct) => {
        try {
            await (
                await fetch(`http://localhost:3000/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
            ).json()
            // rerender
            setProducts([...products, product])
        } catch (error) {}
    }
    const onHandleEdit = async (product: IProduct) => {
        try {
            const newProduct = await (
                await fetch(`http://localhost:3000/products/${product.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
            ).json()
            // rerender
            setProducts(products.map((product) => (product.id === newProduct.id ? newProduct : product)))
        } catch (error) {}
    }
    const onHandleSignup = async (user: any) => {
        try {
            const data = await (
                await fetch(`http://localhost:3000/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
            ).json()
            console.log(data)
        } catch (error) {}
    }
    const onHandleSignin = async (user: any) => {
        try {
            const data = await (
                await fetch(`http://localhost:3000/signin`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
            ).json()
            console.log(data)
        } catch (error) {}
    }
    const getProduct = async (id: number) => {
        try {
            setProduct(await (await fetch(`http://localhost:3000/products/${id}`)).json())
        } catch (error) {}
    }
    return (
        <>
            {products?.map((product: any, index) => (
                <div key={index}>
                    {product.name}{' '}
                    <button onClick={() => getProduct(product.id!)} style={{ marginLeft: 10 }}>
                        Sửa
                    </button>
                </div>
            ))}
            <hr />
            <Add onAdd={onHandleAdd} />
            <hr />
            <Edit product={product} onEdit={onHandleEdit} />
            <hr />
            <Signup onSignup={onHandleSignup} />
            <hr />
            <Signin onSignin={onHandleSignin} />
        </>
    )
}

export default App
