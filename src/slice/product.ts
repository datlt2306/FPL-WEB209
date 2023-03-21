import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const response = await fetch('http://localhost:3001/products');
    const data = await response.json();
    return data
})
// Sử dụng createAsyncThunk Call API sau đó trả về dữ liệu
export const addProduct = createAsyncThunk('product/addProduct', async (product) => {
    const response = await fetch('http://localhost:3001/products', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
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
        // GET Products
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
        // POST product
        builder.addCase(addProduct.pending, (state, action) => {
            state.isLoading = true
        })
        // action.payload là giá trị sau khi call API Thành công
        builder.addCase(addProduct.fulfilled, (state, action) => {
            const product = action.payload;
            state.value.push(product);
            state.isLoading = false
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            state.isLoading = true
        })
    }
})

export default productSlice.reducer;