const counterReducer = (state = { count: 0 }, action) => {
    console.log("action", action);
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
};
export default counterReducer;
