import { counterReducer } from '@/reducers/Counter';
import { productReducer } from '@/reducers/Product';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
    /// 100 reducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


