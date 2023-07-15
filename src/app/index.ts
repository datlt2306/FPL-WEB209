import { legacy_createStore as createStore, combineReducers } from 'redux'
const counterReducer = (state = { count: 10 }, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "INCREASE":
            return { count: state.count + action.payload };
        default:
            return state;
    }
}
const productReducer = (state = { products: [{ id: 1, name: "Product A" }], isLoading: false }, action: any) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return { ...state, products: action.payload };
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
})

const store = createStore(rootReducer);

export default store;

