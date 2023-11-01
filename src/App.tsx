import { useEffect, useState } from 'react'
import './App.css'
import { IProduct } from './interfaces/Product'
import Add from './Add'
import Signup from './Signup'
import Signin from './Signin'
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

    const onHandleAdd = (product: IProduct) => {
        try {
            ;(async () => {
                const data = await (
                    await fetch(`http://localhost:3000/products`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                ).json()
                setProducts((prev) => [...prev, data])
            })()
        } catch (error) {}
    }
    const onHandleSignup = (user: any) => {
        try {
            ;(async () => {
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
            })()
        } catch (error) {}
    }
    const onHandleSignin = (user: any) => {
        try {
            ;(async () => {
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
            })()
        } catch (error) {}
    }

    return (
        <>
            {products?.map((product, index) => <div key={index}>{product.name}</div>)}
            <hr />
            <Add onAdd={onHandleAdd} />
            <hr />
            <Signup onSignup={onHandleSignup} />
            <hr />
            <Signin onSignin={onHandleSignin} />
        </>
    )
}

export default App
