import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../interfaces/Product'
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `products`
        }),
        getProduct: builder.query<IProduct, void>({
            query: (id) => `products/${id}`
        }),
        addProduct: builder.mutation<IProduct, Partial<IProduct>>({
            query: (product) => {
                return {
                    url: 'products',
                    method: 'POST',
                    body: product
                }
            }
        }),
        updateProduct: builder.mutation<IProduct, Partial<IProduct>>({
            query: (product) => {
                return {
                    url: `products/${product.id}`,
                    method: 'PUT',
                    body: product
                }
            }
        }),
        deleteProduct: builder.mutation<void, IProduct>({
            query: (id) => {
                return {
                    url: `products/${id}`,
                    method: 'DELETE'
                }
            }
        })
    }),
})

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi;