import { pause } from '@/utils/pause';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
    id: number;
    name: string;
    price: number;
}

const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query<Product[], void>({
                query: () => {
                    return {
                        url: "/products",
                        method: "GET"
                    };
                }
            }),
            addProduct: builder.mutation<Product, Partial<Product>>({
                query: (product) => {
                    return {
                        url: "/products",
                        method: "POST",
                        body: product
                    };
                }
            }),
            remove: builder.mutation<void, number>({
                query: (id) => {
                    return {
                        url: `/products/${id}`,
                        method: "DELETE",
                    };
                }
            })
        };
    }
});

export const {
    useFetchProductsQuery,
    useAddProductMutation,
    useRemoveMutation
} = productApi;

export default productApi;
