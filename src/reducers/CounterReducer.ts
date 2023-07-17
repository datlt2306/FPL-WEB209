import { produce } from 'immer';

const initialState = {
    count: 0,
};

export const counterReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "INCREMENT":
                drafState.count++;
                break;
            case "DECREMENT":
                drafState.count--;
                break;
            case "INCREASE":
                drafState.count += action.payload;
                break;
            default:
                return state;
        }
    })

};