
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authApi } from '../services/auth';
import { productApi } from '../services/product';

const store = configureStore({
    reducer: {
        authApi: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        // [authApi.reducerPath]: authApi.reducer,
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