import { addProduct, deleteProduct, fetchProducts, updateProduct } from '@/actions/product';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string }
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        // Adding
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
        // Updating
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const newProduct = action.payload;
            state.products = state.products.map((item: any) => item.id == newProduct.id ? newProduct : item)
        })
        // Deleting
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.products = state.products.filter((item: any) => item.id !== action.payload)
        })
    }
})

export const productReducer = productSlice.reducer;