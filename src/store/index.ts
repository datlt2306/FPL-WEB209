// import cartReducer from '@/reducers/CartReducer';
// import { counterReducer } from '@/reducers/CounterReducer';
// import { productReducer } from '@/reducers/ProductReducer';
// import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk';

// const composeEnhancers =
//     typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
//         })
//         : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
//     // other store enhancers if any
// );
// const rootReducer = combineReducers({
//     counter: counterReducer,
//     products: productReducer,
//     cart: cartReducer
// })

// const store = createStore(rootReducer, enhancer);




import { cartReducer } from "@/slices/Cart";
import { counterReducer } from "@/slices/Counter";
import { productReducer } from "@/slices/Product";
import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    products: productReducer,
    counter: counterReducer,
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
        })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default persistStore(store);
