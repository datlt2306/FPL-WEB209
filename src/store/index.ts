import { counterReducer } from '@/reducers/CounterReducer';
import { productReducer } from '@/reducers/ProductReducer';
import { legacy_createStore as createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
})

const store = createStore(rootReducer);
export default store;
