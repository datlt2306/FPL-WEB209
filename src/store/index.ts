import { combineReducers, legacy_createStore as createStore } from 'redux';
import { produce } from 'immer';

const counterReducer = (state = { count: 0 }, action: any) => {
    return produce(state, state => {
        switch (action.type) {
            case "INCREMENT":
                state.count++;
                break;
            case "DECREMENT":
                state.count--;
                break
            case "INCREASE":
                state.count += action.payload;
                break;
            default:
                return state;
        }
    })

};


const productReducer = (state = { products: [], isLoading: false, error: "" }, action: any) => {
    return produce(state, state => {
        switch (action.type) {
            case "product/fetch":
                state.products = action.payload;
                break;
            case "product/add":
                state.products.push(action.payload);
                break
            case "product/edit":
                const product = action.payload;
                state.products = state.products.map((item: any) => item.id === product.id ? product : item)
                break;
            case "product/delete":
                const id = action.payload;
                state.products = state.products.filter((item: any) => item.id !== id)
                break;
            default:
                return state;
        }
    })

}
const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer
})
const store = createStore(rootReducer);

export default store;
