// import cartReducer from '@/reducers/cart';
// import { counterReducer } from '@/reducers/counter';
// import { productReducer } from '@/reducers/product';
// import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
// import thunk from 'redux-thunk';

// const composeEnhancers =
//     typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
//         })
//         : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
//     // other store enhancers if any
// );


// const rootReducer = combineReducers({
//     counter: counterReducer,
//     product: productReducer,
//     cart: cartReducer
// })
// const store = createStore(rootReducer, enhancer);

// pnpm i @reduxjs/toolkit
import { counterReducer } from '@/slices/counter';
import { productReducer } from '@/slices/product';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        //     cart: cartReducer
    }
})





// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
