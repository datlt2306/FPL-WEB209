import { produce } from "immer";

const initialState = { count: 10 } as { count: number }
export const counterReducer = (state = initialState, action: any) => {
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
}