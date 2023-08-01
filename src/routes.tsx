import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

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
                element: <ProductList />,
            },
            {
                path: "product/:id",
                element: <div>Product Detail</div>,
            },
        ],
    },
]);
