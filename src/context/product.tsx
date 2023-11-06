import React, { useEffect, useState } from 'react'
import { IProduct } from '../interfaces/Product'

export const ProductContext = React.createContext({} as any)

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [product, setProduct] = useState<IProduct | null>(null)
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
            <ProductContext.Provider
                value={{
                    products,
                    setProducts,
                    product,
                    getProduct,
                    onHandleSignin,
                    onHandleSignup,
                    onHandleEdit,
                    onHandleAdd
                }}
            >
                {children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider
