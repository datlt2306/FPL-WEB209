import { useQuery } from 'react-query'
import { IProduct } from '../../interfaces/Product'
import ProductItem from '../ProductItem'
import { getProducts } from '../../api/product'
import { Skeleton } from '@/components/ui/skeleton'

const ProductList = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['PRODUCT_KEY'],
        queryFn: () => getProducts()
    })
    if (isLoading)
        return (
            <>
                <Skeleton className='w-[200px] h-[20px] rounded-full' />
                <Skeleton className='w-[100px] h-[20px] rounded-full' />
            </>
        )
    if (isError) return <div>Error.</div>
    return <>{data?.data?.map((item: IProduct, index: number) => <ProductItem key={index} item={item} />)}</>
}
export default ProductList
