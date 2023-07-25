import { addProduct, deleteProduct, getProducts, updateProduct } from '@/actions/product';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    isLoading: false,
    error: ''
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
        // fetching
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
        })
        //adding
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
        //updating
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const newProduct = action.payload;
            state.products = state.products.map((item: any) => item.id === newProduct.id ? newProduct : item)
        })
        //deleting
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id)
        })
    }
});

export const productReducer = productSlice.reducer;