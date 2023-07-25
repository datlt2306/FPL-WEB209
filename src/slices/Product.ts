import { addProduct, deleteProduct, getProducts, updateProduct } from '@/actions/product';
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
        });
        builder.addCase(getProducts.fulfilled, (state: any, action) => {
            state.isLoading = false
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state: any, action) => {
            state.isLoading = false
            state.error = action.payload
        });
        // adding
        builder.addCase(addProduct.fulfilled, (state: any, action) => {
            state.products.push(action.payload);
        });
        // updating
        builder.addCase(updateProduct.fulfilled, (state: any, action) => {
            const newProduct = action.payload;
            state.products = state.products.map((item: any) => item.id == newProduct.id ? newProduct : item)
        });
        // Delete
        builder.addCase(deleteProduct.fulfilled, (state: any, action) => {
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id)
        });
    }
});

export const productReducer = productSlice.reducer;