import { useQuery } from 'react-query'
import { IProduct } from '../../interfaces/Product'
import ProductItem from '../ProductItem'
import { getProducts } from '../../api/product'

const ProductList = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['PRODUCT_KEY'],
        queryFn: () => getProducts()
    })
    if (isLoading) return <>Loading...</>
    if (isError) return <div>Error.</div>
    return <>{data?.data?.map((item: IProduct, index: number) => <ProductItem key={index} item={item} />)}</>
}
export default ProductList
