import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interfaces/product';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: '/signup',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Auth'],
        }),
        signin: builder.mutation({
            query: (user) => ({
                url: '/signin',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Auth'],
        }),
    })
});

export const {
    useSignupMutation,
    useSigninMutation,
} = authApi;