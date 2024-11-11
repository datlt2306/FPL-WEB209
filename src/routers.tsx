import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import AboutPage from "./pages/(website)/about/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashboardPage from "./pages/(admin)/dashboard/page";
import AdminProductsPage from "./pages/(admin)/products/page";
import UseEffectDemo from "./useEffectDemo";
import ReactQueryDemo from "./ReactQueryDemo";
import AdminProductsAddPage from "./pages/(admin)/products-add/page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWebsite />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "use-effect", element: <UseEffectDemo /> },
            { path: "react-query", element: <ReactQueryDemo /> },
        ],
    },
    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="/admin/dashboard" /> },
            { path: "dashboard", element: <DashboardPage /> },
            { path: "products", element: <AdminProductsPage /> },
            { path: "products/add", element: <AdminProductsAddPage /> },
        ],
    },
]);
