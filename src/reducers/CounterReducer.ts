export const counterReducer = (state: any, action: any) => {
    console.log("action", action);
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
};