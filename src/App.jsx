import { useState } from "react";
import "./App.css";

function App() {
    const [color, setColor] = useState("red");
    const [status, setStatus] = useState(false);
    return (
        <>
            <button onClick={() => setStatus(!status)}>Change status</button>
            <div style={{ display: status ? "none" : "block" }}>
                <button onClick={() => setColor("blue")}>Change color</button>
                <div style={{ width: 200, height: 200, backgroundColor: color }}>Content</div>
            </div>
        </>
    );
}

export default App;
