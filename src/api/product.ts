import { IProduct } from '@/interfaces/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<any[], void>({
            query: () => `/products`
        }),
        getProductById: builder.query<IProduct, number>({
            query: (id) => `/products/${id}`
        }),
        addProduct: builder.mutation({
            query: (product: IProduct) => {
                return {
                    url: `/products`,
                    method: "POST",
                    body: product
                }
            }
        }),
        updateProduct: builder.mutation({
            query: (product: IProduct) => {
                return {
                    url: `/products/${product.id}`,
                    method: "PATCH",
                    body: product
                }
            }
        }),
        removeProduct: builder.mutation({
            query: (id: number) => {
                return {
                    url: `/products/${id}`,
                    method: "DELETE"
                }
            }
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useRemoveProductMutation,
    useUpdateProductMutation
} = productApi;
export const productReducer = productApi.reducer;
export default productApi;