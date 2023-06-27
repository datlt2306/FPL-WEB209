import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import { IInfo } from "./interfaces/info";

function App() {
    const [info] = useState<IInfo>({
        name: "Dat",
        children: [
            { id: 1, name: "Tung Lam", age: 20 },
            { id: 2, name: "Thanh Tung", age: 10 },
        ],
    });
    return (
        <>
            <Hello name="Dat" age={20} info={info} />
        </>
    );
}

export default App;
