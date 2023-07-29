import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [] },
    reducers: {
        add: (state, action) => {
            const newProduct = action.payload;
            const existProductIndex = state.items.findIndex(item => item.id === newProduct.id);
            console.log(existProductIndex)
            if (existProductIndex === -1) {
                state.items.push(newProduct);
            } else {
                state.items[existProductIndex].quantity += newProduct.quantity;
            }
        },
        increase: (state, action) => {
            state.items.find(item => item.id === action.payload).quantity++;
        },
        decrease: (state, action) => {
            const items = state.items.find(item => item.id === action.payload);
            items.quantity--;
            if (items.quantity < 1) {
                const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?')
                if (confirm) state.items = state.items.filter(item => item.id !== items.id);
                items.quantity = 1;
            }
        }
    },
});

export const { add, increase, decrease } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;