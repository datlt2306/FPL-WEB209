import { createContext, useEffect, useState } from 'react'
import { IProduct } from '../interfaces/Product'

export const ProductContext = createContext([] as any)

const ProductContextProvider = ({ children }: any) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [product, setProduct] = useState<IProduct | {}>({})
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
    const onHandleEdit = (product: IProduct) => {
        try {
            ;(async () => {
                const newProduct = await (
                    await fetch(`http://localhost:3000/products/${product.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                ).json()
                // Rerender
                setProducts(products.map((product) => (product.id === newProduct.id ? newProduct : product)))
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
    const onHandleGetProduct = async (id: number) => {
        try {
            setIsLoading(true)
            const data = await (await fetch(`http://localhost:3000/products/${id}`)).json()
            setProduct(data)
        } catch (error) {
            console.log('[GET_PRODUCT_ERROR]', error)
            setError((error as Error).message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <ProductContext.Provider
                value={{
                    products,
                    product,
                    onHandleAdd,
                    onHandleGetProduct,
                    onHandleEdit,
                    onHandleSignin,
                    onHandleSignup
                }}
            >
                {children}
            </ProductContext.Provider>
        </>
    )
}
export default ProductContextProvider
