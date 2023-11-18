import { getOneProduct, getProducts } from '@/api/product'
import { useQuery } from 'react-query'

export const useProductQuery = (id?: number) => {
    const { data, ...rest } = useQuery({
        queryKey: ['PRODUCT_KEY', id],
        queryFn: async () => (id ? await getOneProduct(id) : await getProducts())
    })
    return { data, ...rest }
}
