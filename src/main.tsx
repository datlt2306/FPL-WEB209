import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import CounterContextProvider from "./contexts/CounterContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
    <ProductContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductContextProvider>
);
