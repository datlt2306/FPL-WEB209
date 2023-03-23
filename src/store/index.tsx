import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../slice/counter";
import productSlice from "../slice/product";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
