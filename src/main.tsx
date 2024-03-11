import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductContext } from "./contexts/product";
import { BrowserRouter, RouterProvider } from "react-router-dom";
const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
