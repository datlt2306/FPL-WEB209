import { getProducts } from '@/actions/Product';
import { instance } from '@/axios/config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as {
    products: any[],
    isLoading: boolean,
    error: string
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(actionName, callback);
        builder.addCase(getProducts.pending, (state, action) => {
            console.log('pending')
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
});

export const productReducer = productSlice.reducer;