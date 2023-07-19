import { counterReducer } from '@/reducers/Counter';
import { productReducer } from '@/reducers/Product';
import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);


const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
    /// 100 reducer
})

const store = createStore(rootReducer, enhancer);

export default store;


