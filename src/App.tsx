import { useState } from "react";
import "./App.css";

function App() {
    const [status, setStatus] = useState<boolean>(true);
    return (
        <>
            <div
                style={{ width: 200, height: 200, backgroundColor: status ? "red" : "blue" }}
                onClick={() => setStatus(!status)}
            >
                Content
            </div>
        </>
    );
}

export default App;
