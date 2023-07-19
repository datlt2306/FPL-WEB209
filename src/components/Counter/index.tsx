import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";

const Counter = () => {
    const dispatch = useDispatch();
    const { count } = useSelector((state: any) => state.counter);
    // plain object
    return (
        <div>
            Counter: {count}
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

// function reducer(state, action){

// }
// reducer(state, action)
