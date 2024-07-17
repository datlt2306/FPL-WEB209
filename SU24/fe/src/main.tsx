import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./global.css";
import "./styles/style.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleProvider } from "@ant-design/cssinjs";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <StyleProvider layer>
                <App />
            </StyleProvider>
        </BrowserRouter>
    </QueryClientProvider>
);
