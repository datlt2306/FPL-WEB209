import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import Dashboard from "./pages/admin/dashboard";
import AdminProduct from "./pages/admin/product";
import AdminProductAdd from "./pages/admin/product/add";
import AdminProductEdit from "./pages/admin/product/edit";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Layout website</div>,
    },
    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "product", element: <AdminProduct /> },
            { path: "product/add", element: <AdminProductAdd /> },
            { path: "product/:idProduct/edit", element: <AdminProductEdit /> },
        ],
    },
    { path: "*", element: "Not Found Page" },
]);
