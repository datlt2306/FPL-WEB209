import { decrement, increase, increment } from "@/slices/counter";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "@/store/hook";
const Counter = () => {
    const dispatch = useAppDispatch();
    const { count } = useAppSelector((state: any) => state.counter);
    // plain object
    return (
        <div>
            Counter: {count}
            <Button type="primary" onClick={() => dispatch(increment())}>
                Increment
            </Button>
            <Button type="primary" onClick={() => dispatch(decrement())}>
                Decrement
            </Button>
            <Button type="primary" onClick={() => dispatch(increase(10))}>
                Increase
            </Button>
        </div>
    );
};

export default Counter;
