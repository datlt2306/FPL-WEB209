import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import About from "./pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home page!</div>,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/admin",
        element: (
            <div>
                Layout Admin
                <Outlet />
            </div>
        ),
        children: [
            {
                index: true,
                element: <Navigate to="product" />,
            },
            {
                path: "product",
                element: <div>Product List</div>,
            },
            {
                path: "product/:idProduct",
                element: <div>Detail</div>,
            },
        ],
    },
]);
