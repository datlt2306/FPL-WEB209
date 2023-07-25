import { useAppDispatch, useAppSelector } from "@/app/hook";
import { decrement, increase, increment } from "@/slices/Counter";

const Counter = () => {
    const dispatch = useAppDispatch();
    const { count } = useAppSelector((state: any) => state.counter);
    return (
        <div>
            Value: {count}
            <button onClick={() => dispatch(increment())}>Click</button>
            <button onClick={() => dispatch(decrement())}>Click 2</button>
            <button onClick={() => dispatch(increase(10))}>Click 3</button>
        </div>
    );
};

export default Counter;
