import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { counterReducer } from '../slices/Counter';
const store = configureStore({
    reducer: {
        counter: counterReducer
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


