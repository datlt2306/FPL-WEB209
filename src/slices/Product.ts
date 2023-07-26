import { instance } from '@/axios/config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as {
    products: any[],
    isLoading: boolean,
    error: string
}

export const getProduct = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        try {
            const data = await instance.get(`/products`);
            return data;
        } catch (error) {

        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    // rerender
    extraReducers: (builder) => {
        // fetching
        builder.addCase(getProduct.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false;
        })
        // adding - 3 status
    }
})

export const productReducer = productSlice.reducer;