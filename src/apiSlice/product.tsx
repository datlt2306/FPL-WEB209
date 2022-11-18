import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interfaces/product";
export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => "/products",
            providesTags: ["Product"],
        }),
        addProduct: builder.mutation<IProduct, Omit<IProduct, "id">>({
            query: (product) => ({
                url: "/products",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});
export const { useGetProductsQuery, useAddProductMutation } = productApi;
