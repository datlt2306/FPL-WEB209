import "./App.css";
import { Hello, Sum } from "@/components";

function App() {
    const info = {
        name: "Kien",
        children: [
            { id: 1, name: "Lam" },
            { id: 2, name: "Tung" },
        ],
    };
    return (
        <>
            <Hello name="Dat" age={20} info={info} />
            <Sum />
        </>
    );
}

export default App;
