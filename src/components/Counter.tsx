import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { decrement, increase, increment } from "@/slices/Counter";
const Counter = () => {
    const { count } = useAppSelector((state: any) => state.counter);
    const dispatch = useAppDispatch();
    // dispatch nhận giá trị là 1 plain object : { key: value }
    return (
        <div>
            Counter {count}
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button onClick={() => dispatch(increase(10))}>DECREMENT</button>
            {/* 10 => action.payload = 10 */}
        </div>
    );
};

export default Counter;
