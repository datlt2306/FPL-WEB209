import { legacy_createStore as createStore, combineReducers } from 'redux'

const counterReducer = (state = { count: 0 }, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
            };
        case "DECREMENT":
            return {
                count: state.count - 1,
            };
        case "INCREASE":
            return {
                count: state.count + action.payload,
            };
        default:
            return state;
    }
};


const productReducer = (state = { products: [] }, action: any) => {
    switch (action.type) {
        case "product/fetch":
            return {
                products: action.payload
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer
})
const store = createStore(rootReducer);

export default store;
