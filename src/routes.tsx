import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Cart from "./components/Cart";

export const router = createBrowserRouter([
    { path: "/", element: <div>Home Page</div> },
    { path: "/cart", element: <Cart /> },
    {
        path: "/admin",
        element: (
            <div>
                Layout Admin <Outlet />
            </div>
        ),
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" />,
            },
            {
                path: "dashboard",
                element: <div>Dashboard</div>,
            },
            {
                path: "product",
                element: <div>Product List</div>,
            },
            {
                path: "product/:id",
                element: <div>Product Detail</div>,
            },
        ],
    },
]);
