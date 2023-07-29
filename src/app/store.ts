import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit"
import { counterReducer } from '../slices/Counter';
import { productReducer } from '../slices/Product';
import { cartReducer } from "@/slices/Cart";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Cấu hình persist ( lưu localStorage )
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['products', 'counter']
}
const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default persistStore(store)


