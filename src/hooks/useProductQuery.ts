import { getAll, getOne } from '@/services/product'
import { useQuery } from 'react-query'

export const useProductQuery = (productId?: number) => {
    const { data, ...rest } = useQuery({
        queryKey: productId ? ['PRODUCTS_KEY', productId] : ['PRODUCTS_KEY'],
        queryFn: async () => (productId ? await getOne(productId) : await getAll()),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true
    })
    return { data, ...rest }
}
