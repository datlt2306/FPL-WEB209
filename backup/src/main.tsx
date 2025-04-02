import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { createContext } from "react";

export const counterContext = createContext(0);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <counterContext.Provider value={10}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </counterContext.Provider>
);
