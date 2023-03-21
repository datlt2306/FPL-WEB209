import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../slice/counter";
import productReducer from "../slice/product";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
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
