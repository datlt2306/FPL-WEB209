import { IProduct } from '@/interfaces/product';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';



const initialState = {
    items: []
} as { items: any[] }
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IProduct>) => {
            const newProduct = action.payload;
            const existProductIndex = state.items.findIndex((item: IProduct) => item.id == newProduct.id);
            if (existProductIndex === -1) {
                state.items.push(newProduct);
            } else {
                state.items[existProductIndex].quantity++;
            }
        },
        increase: (state, action: PayloadAction<number>) => {
            state.items.find((item: IProduct) => item.id === action.payload).quantity++;
        },
        decrease: (state, action: PayloadAction<number>) => {
            const productFound = state.items.find((item: IProduct) => item.id === action.payload);
            productFound.quantity--;
            if (productFound.quantity < 1) {
                const confirm = window.confirm('Are you fucking sure??');
                if (confirm) state.items = state.items.filter((item: IProduct) => item.id !== action.payload);
                productFound.quantity = 1
            }
        }
    }
});

export const { add, increase, decrease } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;