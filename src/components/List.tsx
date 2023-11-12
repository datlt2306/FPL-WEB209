import { useQuery } from 'react-query'
import { getAll } from '../api/product'
import { IProduct } from '../interfaces/Product'
import ProductItem from './ProductItem'

const List = () => {
    const {
        isLoading,
        isError,
        data: products
    } = useQuery({
        queryKey: 'PRODUCTS_KEY',
        queryFn: () => getAll()
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error....</div>
    return (
        <div>
            <h2>Danh sách</h2>
            {products?.map((product: IProduct, index: number) => <ProductItem product={product} key={index} />)}
        </div>
    )
}

export default List
