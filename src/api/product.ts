import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<any[], void>({
            query: () => `/products`
        })
    })
})

export const { useGetProductsQuery } = productApi;
export const productReducer = productApi.reducer;
export default productApi;