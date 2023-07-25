import { produce } from "immer";

export const counterReducer = (state = {
    count: 10,
}, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "counter/increment":
                draftState.count++;
                break;
            case "counter/decrement":
                draftState.count--;
                break;
            case "counter/increase":
                draftState.count += action.payload;
                break;
            default:
                return state;
        }
    })
};
