import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import CounterContextProvider from "./contexts/CounterContextProvider";
const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
    <CounterContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CounterContextProvider>
);
