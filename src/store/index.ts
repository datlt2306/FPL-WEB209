import { combineReducers, legacy_createStore as createStore, applyMiddleware, Dispatch } from "redux";
import { thunk } from "redux-thunk";
import { IProduct } from "../interfaces/Product";

const counterReducer = (state = { count: 0 }, action) => {
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

const initialState = {
    products: [] as IProduct[]
}

const productReducer = (state = initialState, action: Dispatch<any>) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                products: action.payload,
            };
    }
    return state;
};

const store = createStore(productReducer, applyMiddleware(thunk));
export default store;
