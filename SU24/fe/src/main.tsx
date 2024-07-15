import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import CounterProvider from "./context/CounterContext.tsx";
import "./global.css";
import "./styles/style.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CounterProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CounterProvider>
    </React.StrictMode>,
);
