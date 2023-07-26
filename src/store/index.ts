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




import { counterReducer } from "@/slices/Counter";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // products: productReducer,
        // cart: cartReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store;
