import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";

export const router = createBrowserRouter([
    // Dành cho website
    {
        path: "/",
        element: <LayoutWebsite />,
        children: [
            { index: true, element: <div>Home page</div> },
            {
                path: "product",
                element: <div>Product Page</div>,
            },
        ],
    }, // Dành cho quản trị
    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            { path: "dashboard", element: <div>Dashboard page</div> },
            { path: "product", element: <div>Product Management page</div> },
        ],
    },
]);
