import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count: 10
} as { count: number };


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // Định nghĩa các action cơ bản
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        increase: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increment, decrement, increase } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

