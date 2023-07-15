import { useSelector, useDispatch } from "react-redux";
import { Button } from "..";
const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state.counter.count);
    console.log("state", state);
    return (
        <div>
            Counter: {state}
            <Button type="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </Button>
            <Button type="primary" onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </Button>
            <Button type="primary" onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
                Increase
            </Button>
        </div>
    );
};

export default Counter;
