import { getProduct, getProducts } from '@/apis/product'
import { useQuery } from 'react-query'

export const useProductQuery = (productId?: number | string) => {
    const { data, ...rest } = useQuery({
        queryKey: productId ? ['PRODUCT', productId] : ['PRODUCT'],
        queryFn: () => (productId ? getProduct(productId ? +productId : 0) : getProducts()),
        // refetchOnReconnect: true
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })

    return { data, ...rest }
}
