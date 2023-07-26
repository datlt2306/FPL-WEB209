import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
} as { count: number };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // actions
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--
        },
        increase(state, action) {
            state.count += action.payload
        }
    }
});

// dùng trong component => dispatch
export const { increment, decrement, increase } = counterSlice.actions;
// import vào store
export const counterReducer = counterSlice.reducer