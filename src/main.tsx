import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={client}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
