import { Navigate, createBrowserRouter, Outlet } from "react-router-dom";
import ProductList from "./components/ProductList";

export const router = createBrowserRouter([
    // Định nghĩa route cho website
    {
        path: "/",
        element: (
            <div>
                Layout Website <Outlet />
            </div>
        ),
        children: [
            { index: true, element: <div>Home Page</div> },
            { path: "about", element: <div>About Page</div> },
        ],
    },
    // Định nghĩa route cho admin
    {
        path: "/admin",
        element: (
            <div>
                Sidebar admin <Outlet />
            </div>
        ),
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            { path: "dashboard", element: <div>Dashboard</div> },
            { path: "product", element: <ProductList /> },
        ],
    },
    { path: "*", element: "Not Found Page" },
]);
