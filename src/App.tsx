import { useState } from "react";
import "./App.css";
import { Button, Hello, Sum } from "@/components";

function App() {
    const [info] = useState({
        name: "Kien",
        children: [
            { id: 1, name: "Lam" },
            { id: 2, name: "Tung" },
        ],
    });
    const handleLog = () => {
        console.log("hello");
    };
    return (
        <>
            <Hello name="Dat" age={20} info={info} />
            <Sum />
            <Button color="#fff" background="blue" text="Nút 1" onHandleClick={handleLog} />
            <Button color="#fff" background="green" text="Nút 2" />
        </>
    );
}

export default App;
