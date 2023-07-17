
import { produce } from 'immer';

const initialState: { count: number } = {
    count: 10
}
export const counterReducer = (state = initialState, action: any) => {
    return produce(state, state => {
        switch (action.type) {
            case "INCREMENT":
                state.count++;
                return;
            case "DECREMENT":
                state.count--;
                return;
            case "INCREASE":
                state.count += action.payload;
                return;
            default:
                return state;
        }
    })

};