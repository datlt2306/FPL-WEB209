import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { decrement, increase, increment } from "@/slices/Counter";

const Counter = () => {
    const dispatch = useAppDispatch();
    const { count } = useAppSelector((state: any) => state.counter);
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

// function reducer(state, action){

// }
// reducer(state, action)
