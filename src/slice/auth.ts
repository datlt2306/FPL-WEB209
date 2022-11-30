import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    } as any,
    reducers: {
        login(state) {
            state.isAuth = true;
        }
    }
});

export const { login } = authSlice.actions;
export default authSlice.reducer;