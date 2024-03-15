import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ProductContextProvider from "./context/ProductContextProvider";
import { CounterContext } from "./context/CountContext";
import CounterContextProvider from "./context/CounterContextProvider";
ReactDOM.createRoot(document.getElementById("root")!).render(
    <ProductContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductContextProvider>
);

/**
 * - hướng dẫn cài đặt react sử dụng vitejs
 * npm create vite@latest react-vite -- --template react-ts
 *
 */
