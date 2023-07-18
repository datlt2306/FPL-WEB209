import { legacy_createStore as createStore } from 'redux'

import { produce } from 'immer';

const initialState = {
    count: 10,
};
const reducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "INCREMENT":
                draftState.count++;
                break;
            case "DECREMENT":
                draftState.count--;
                break;
            case "INCREASE":
                draftState.count += action.payload;
                break;
            default:
                return state;
        }
    })
};

const store = createStore(reducer);
export default store;
