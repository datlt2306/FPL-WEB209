import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, RouterProviderProps } from "react-router-dom";
import App from "./App";
import "./index.css";
import { router } from "./routers";
interface MyRouterProps extends RouterProviderProps {
    children: React.ReactNode;
}
function MyRouter({ children, ...props }: MyRouterProps) {
    return <RouterProvider {...props}>{children}</RouterProvider>;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MyRouter router={router}>
            <App />
        </MyRouter>
    </React.StrictMode>
);
