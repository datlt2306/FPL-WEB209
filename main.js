import { createStore } from "redux";

const intialState = {
    count: 0,
};
const action = {
    type: "INCREMENT",
};
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        default:
            return state;
    }
};
const store = createStore(reducer);
console.log("intialState", store.getState());
store.dispatch(action);
console.log("intialState", store.getState());
