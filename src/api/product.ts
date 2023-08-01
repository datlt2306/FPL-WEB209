import { IProduct } from '@/interfaces/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000`
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `/products`
        }),
        addProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => {
                return {
                    url: "/products",
                    method: "POST",
                    body: product
                }
            }
        }),
        updateProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => {
                return {
                    url: "/products/" + product.id,
                    method: "PUT",
                    body: product
                }
            }
        }),
        removeProduct: builder.mutation<IProduct, IProduct>({
            query: (id) => {
                return {
                    url: "/products/" + id,
                    method: "DELETE"
                }
            }
        })
    })
});

export const { useGetProductsQuery, useAddProductMutation, useUpdateProductMutation, useRemoveProductMutation } = productApi;
export const productReducer = productApi.reducer;
export default productApi;