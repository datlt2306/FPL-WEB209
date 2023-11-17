import { getAll, getOne } from '@/api/product'
import { useQuery } from 'react-query'

export const useProductQuery = (productId?: number) => {
    const { data, ...rest } = useQuery({
        queryKey: productId ? ['PRODUCTS_KEY', productId] : ['PRODUCTS_KEY'],
        queryFn: async () => (productId ? await getOne(productId) : await getAll())
    })
    return { data, ...rest }
}
