import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    return data
});

export const addProduct = createAsyncThunk("product/addProduct", async (product) => {
    const { data } = await axios.post("http://localhost:3000/products", product);
    return data
})
export const updateProduct = createAsyncThunk("product/updateProduct", async (product) => {
    const { data } = await axios.put("http://localhost:3000/products/" + product.id, product);
    return data
})
export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id) => {
    await axios.delete("http://localhost:3000/products/" + id);
    return id;
})


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