import { useEffect, useState } from 'react'
import './App.css'
import Add from './components/Add'
import { IProduct } from './interfaces/Product'
import Signup from './components/Signup'
import Signin from './components/Signin'

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
    const onHandleAdd = async (product: IProduct) => {
        try {
            const data = await (
                await fetch(`http://localhost:3000/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
            ).json()
            console.log(data)
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
    return (
        <>
            {products?.map((product: any, index) => <div key={index}>{product.name}</div>)}
            <hr />
            <Add onAdd={onHandleAdd} />
            <Signup onSignup={onHandleSignup} />
            <Signin onSignin={onHandleSignin} />
        </>
    )
}

export default App
