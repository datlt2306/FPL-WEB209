import { IProduct } from '@/interfaces/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct, void>({
            query: () => {
                return {
                    url: `/products`,
                    method: "GET"
                }
            }
        }),
        addProduct: builder.mutation({
            query: (product: IProduct) => {
                return {
                    url: `/products`,
                    method: "POST",
                    body: product
                }
            }
        })
    })
});

export const { useGetProductsQuery, useAddProductMutation } = productApi;
export const productReducer = productApi.reducer;

export default productApi;