import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interfaces/product';

export const productApi = createApi({
    reducerPath: 'productApi',
    // instance trong axios
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        // ham getProducts
        getProducts: builder.query<IProduct[], void>({
            query: () => '/products',
        }),
        getProduct: builder.query<IProduct, void>({
            query: (id) => `/products/${id}`,
        }),
    })
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;