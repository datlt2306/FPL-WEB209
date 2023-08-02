import { IProduct } from '@/interfaces/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: 'products',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        // action
        getProducts: builder.query<IProduct[], void>({
            query: () => '/products',
            providesTags: ['Product']
        }),
        getProductById: builder.query<IProduct, number>({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),
        // mutation
        addProduct: builder.mutation({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        removeProduct: builder.mutation<IProduct, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PATCH',
                body: product
            }),
            invalidatesTags: ['Product']
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useRemoveProductMutation,
    useUpdateProductMutation
} = productApi;
export const productReducer = productApi.reducer;
export default productApi;

// TagTypes: ['Product']
// path      | agrument | tags
// /products | none     | Product -> provideTags(['Product'])
// /products | id       |
// /products | product  | Product -> invalidateTags(['Product'])


// Thêm -> call API ADD -> invalidateTags(['Product']) -> call API GET