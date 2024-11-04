import { createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import AboutPage from "./pages/(website)/about/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashboardPage from "./pages/(admin)/dashboard/page";
import AdminProductsPage from "./pages/(admin)/products/page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWebsite />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
        ],
    },
    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { path: "dashboard", element: <DashboardPage /> },
            { path: "products", element: <AdminProductsPage /> },
        ],
    },
]);
