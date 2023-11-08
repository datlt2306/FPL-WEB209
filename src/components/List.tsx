import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/product'

const List = () => {
    const { state, dispatch } = useContext(ProductContext)
    useEffect(() => {
        ;(async () => {
            try {
                const data = await (await fetch('http://localhost:3000/products')).json()
                // setProducts(data)
                dispatch({ type: 'FETCH_PRODUCTS', payload: data })
            } catch (error) {
            } finally {
            }
        })()
    }, [dispatch])
    return (
        <div>
            {state.products?.map((product: any, index: any) => (
                <div key={index}>
                    {product.name}
                    <button
                        onClick={() => dispatch({ type: 'GET_PRODUCT', payload: product.id! })}
                        style={{ marginLeft: 10 }}
                    >
                        Sửa
                    </button>
                </div>
            ))}
        </div>
    )
}

export default List
