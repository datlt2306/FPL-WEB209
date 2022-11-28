import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { signup } from '../api/auth';

export const signupApi = createAsyncThunk(
    'auth/signup',
    async (user) => {
        const data = await signup(user)
        return data;
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: { user: {} } as any,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(signupApi.fulfilled, (state: any, action: PayloadAction) => {
            state.user = action.payload;
        })
    }
});

export default authSlice.reducer;