import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
