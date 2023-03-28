import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import counterReducer from "../slice/counter";
// import productSlice from "../slice/product";
import { productApi } from "../services/product";
export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        // counter: counterReducer,
        // product: productSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
