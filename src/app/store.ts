
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../slice/product';
import { productApi } from '../services/product';
import { authApi } from '../services/auth';

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productApi.middleware, authApi.middleware]),
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;