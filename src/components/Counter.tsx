import { useContext } from "react";
import { counterContext } from "../main";

const Counter = () => {
    const counter = useContext(counterContext);
    console.log(counter);
    return (
        <div>
            <h1>Counter</h1>
        </div>
    );
};

export default Counter;
