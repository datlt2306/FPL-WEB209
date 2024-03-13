import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CounterContextProvider from "./context/CounterContextProvider";
import "./index.css";
const count = 10;
ReactDOM.createRoot(document.getElementById("root")!).render(
    <CounterContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CounterContextProvider>
);

/**
 * - hướng dẫn cài đặt react sử dụng vitejs
 * npm create vite@latest react-vite -- --template react-ts
 *
 */
