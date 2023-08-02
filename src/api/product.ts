import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
interface IProduct {
    id?: number,
    name: string,
    price: number;
}
const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `/products`
        }),
        getProductById: builder.query<IProduct, number>({
            query: (id) => `/products/${id}`
        })
    })
});

export const { useGetProductsQuery } = productApi;
export const productReducer = productApi.reducer;
export default productApi;