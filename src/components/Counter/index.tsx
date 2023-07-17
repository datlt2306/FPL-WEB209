import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";

const Counter = () => {
    // const { state, dispatch } = useContext(CounterContext);

    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.count);
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
