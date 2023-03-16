import { decrement, increaseByAmount, increment } from "../slice/counter";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Counter = () => {
    const counter = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    return (
        <div>
            {counter}
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button onClick={() => dispatch(increaseByAmount(10))}>INCREASE</button>
        </div>
    );
};

export default Counter;
