import { produce } from "immer";

export const counterReducer = (state = { count: 0 }, action: any) => {
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