
import { produce } from 'immer';

const initialState: { count: number } = {
    count: 10
}
export const counterReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "counter/increment":
                drafState.count++;
                return;
            case "DECREMENT":
                drafState.count--;
                return;
            case "INCREASE":
                drafState.count += action.payload;
                return;
            default:
                return state;
        }
    })

};