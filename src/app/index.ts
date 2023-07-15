import { legacy_createStore as createStore } from 'redux'
const reducer = (state = { count: 10 }, action: any) => {
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

const store = createStore(reducer);

export default store;