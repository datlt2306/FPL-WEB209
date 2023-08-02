import { IProduct } from '@/interfaces/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        // action
        getProducts: builder.query<IProduct[], void>({
            query: () => '/products'
        }),
        getProductById: builder.query<IProduct, number>({
            query: (id) => `/products/${id}`
        })
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
export const productReducer = productApi.reducer;
export default productApi;