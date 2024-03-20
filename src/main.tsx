import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>
);

/**
 * - hướng dẫn cài đặt react sử dụng vitejs
 * npm create vite@latest react-vite -- --template react-ts
 *
 */
