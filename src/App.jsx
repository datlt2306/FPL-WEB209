import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AdminProductsPage from "./pages/admin/Products";
import Dashboard from "./pages/admin/Dashboard";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<AdminProductsPage />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/edit" element={<ProductEdit />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;

// npm i json-server-auth json-server@0.17.4
// npm run server

/**
 * Bước 1: Cài đặt antd: npm i antd
 * Bước 2: cài đặt tailwindcss:
 *  - npm i postcss autoprefixer tailwindcss -D
 *  - npx tailwindcss init -p
 *  - truy cập tailwind.config.js và thêm các cấu hình sau
 *  https://tailwindcss.com/docs/guides/vite
 *  - copy css
 *  @tailwind base;
 *  @tailwind components;
 *  @tailwind utilities;
 * Bước 3: sử dụng component Layout
 *  - Tạo 1 file LayoutAdmin.jsx
 * Nội dung: https://ant.design/components/layout
 * - truy cập App.js, cấu hình route:   <Route path="/admin" element={<LayoutAdmin />} />
 */
