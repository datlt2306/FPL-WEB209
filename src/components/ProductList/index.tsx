import { useContext, useEffect } from 'react'
import { IProduct } from '../../interfaces/Product'
import { ProductContext } from '../../context/product'
import { useQuery } from 'react-query'

const ProductList = () => {
    const {
        data: products,
        isLoading,
        isError
    } = useQuery(['PRODUCT_KEY'], async () => {
        const response = await fetch(`http://localhost:3000/products`)
        const data = await response.json()
        return data
    })
    if (isLoading) return <>Loading...</>
    if (isError) return <div>Error.</div>
    return <>{products?.map((item: IProduct, index: number) => <div key={index}>{item.name}</div>)}</>
}
export default ProductList
