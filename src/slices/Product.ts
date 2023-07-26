import { addProduct, getProduct, removeProduct, updateProduct } from '@/actions/product';
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
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
        // updating
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const product = action.payload
            state.products = state.products.map((item: any) => item.id === product.id ? product : item)
        })
        // deleting
        builder.addCase(removeProduct.fulfilled, (state, action) => {
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id)
        })
    }
})

export const productReducer = productSlice.reducer;