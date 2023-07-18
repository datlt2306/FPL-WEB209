import { counterReducer } from '@/reducers/counter';
import { productReducer } from '@/reducers/product';
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);


const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer
})
const store = createStore(rootReducer, enhancer);

export default store;
