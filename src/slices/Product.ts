import { getProducts } from '@/actions/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as {
    products: any[],
    isLoading: boolean,
    error: string | null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching
        builder.addCase(getProducts.pending, (state: any) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state: any, action) => {
            state.isLoading = false
            state.products = action.payload;
        })
        builder.addCase(getProducts.rejected, (state: any, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
});

export const productReducer = productSlice.reducer;