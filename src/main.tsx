import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CounterProvider, { CounterContext } from "./context/index.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <CounterProvider>
        <App />
    </CounterProvider>
);
