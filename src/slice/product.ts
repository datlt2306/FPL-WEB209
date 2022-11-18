import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProducts, getProduct } from '../api/product';
import { IProduct } from '../interfaces/product';


const initialState: { value: IProduct[] } = {
    value: [],
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
});


export default productSlice.reducer;