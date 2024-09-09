import { useState } from "react";

const App = () => {
    const [status, setStatus] = useState(false);
    return (
        <>
            {JSON.stringify(status)}
            <button onClick={() => setStatus(!status)}>Change status</button>
            <div style={{ display: status ? "none" : "block" }}>
                <div style={{ width: 200, height: 200, backgroundColor: "blue" }}>Content</div>
            </div>
        </>
    );
};

export default App;
