import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const response = await fetch('http://localhost:3001/products');
    const data = await response.json();
    return data
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [],
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.value = action.payload;
            state.isLoading = false
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = true
        })
    }
})

export default productSlice.reducer;