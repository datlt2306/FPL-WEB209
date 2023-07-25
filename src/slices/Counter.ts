import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 } as { count: number },
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        increase: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        }
    }
})
export const { increment, decrement, increase } = counterSlice.actions;

// export default counterSlice.reducer;
export const counterReducer = counterSlice.reducer;