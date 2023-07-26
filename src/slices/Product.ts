import { addProduct, getProducts, removeProduct, updateProduct } from '@/actions/Product';
import { createSlice } from '@reduxjs/toolkit';

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
        // Fetching
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
        // Adding
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
        })
        // Updating
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const product = action.payload;
            // state.products[action.payload.id] = action.payload;
            state.products = state.products.map((item: any) => item.id === product.id ? product : item);
        })
        // Deleting
        builder.addCase(removeProduct.fulfilled, (state, action) => {
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id);
        })
    }
});

export const productReducer = productSlice.reducer;