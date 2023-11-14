import { useQuery } from 'react-query'
import { IProduct } from '../../interfaces/Product'
import ProductItem from '../ProductItem'

const ProductList = () => {
    const {
        data: products,
        isLoading,
        isError
    } = useQuery({
        queryKey: ['PRODUCT_KEY'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/products`)
            const data = await response.json()
            return data
        }
    })

    if (isLoading) return <>Loading...</>
    if (isError) return <div>Error.</div>
    return <>{products?.map((item: IProduct, index: number) => <ProductItem key={index} item={item} />)}</>
}
export default ProductList
