import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../interfaces/Product'
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `products`
        }),
        getProduct: builder.query<IProduct, void>({
            query: (id) => `products/${id}`
        })
    }),
})

export const { useGetProductsQuery } = productApi;