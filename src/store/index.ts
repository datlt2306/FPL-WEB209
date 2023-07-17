import { counterReducer } from '@/reducers/Counter';
import { productReducer } from '@/reducers/Product';
import { legacy_createStore as createStore, combineReducers } from 'redux'
const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
})

const store = createStore(rootReducer);

export default store;

