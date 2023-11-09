import { useContext, useEffect } from 'react'
import { IProduct } from '../../interfaces/Product'
import { ProductContext } from '../../context/product'

const ProductList = () => {
    const { state, dispatch } = useContext(ProductContext)
    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'GET_PRODUCTS', payload: data })
            })
    }, [dispatch])
    if (!state.products) return <>Không có sản phẩm nào</>
    return (
        <>
            {state.products.map((item: IProduct, index: number) => (
                <div key={index}>{item.name}</div>
            ))}
        </>
    )
}
export default ProductList
