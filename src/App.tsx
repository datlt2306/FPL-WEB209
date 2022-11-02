import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Article from "./components/Article";
import Hello from "./components/Hello";
import Lifecycle from "./components/Lifecycle";

function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Le Trong Dat");
    const changeCount = () => {
        setCount(count + 1);
    };
    return (
        <div className="App">
            <Lifecycle />
        </div>
    );
}

export default App;
