import { useDispatch, useSelector } from "react-redux";

function App() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <>
            {count}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "INCREASE", payload: 20 })}>Increase</button>
        </>
    );
}

export default App;
