import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { IProduct } from '../interfaces/Product'
import { getProducts, updateProduct } from '../apis/product'
import ProductItem from './ProductItem'

const List = () => {
    const {
        data: products,
        isLoading,
        isError
    } = useQuery({
        // cung cấp 1 query key
        queryKey: ['PRODUCT'],
        // call api
        queryFn: async () => {
            const { data } = await getProducts()
            return data
        }
    })

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    return <div>{products?.map((product: any, index: any) => <ProductItem key={index} product={product} />)}</div>
}

export default List
// npm i react-query
// npm i @tanstack/react-query-devtools
