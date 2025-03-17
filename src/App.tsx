import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ProductList from "./pages/products/list";
import ProductAdd from "./pages/products/add";
import ProductEdit from "./pages/products/edit";
import Counter from "./Counter";
import LayoutAdmin from "./components/LayoutAdmin";
import Authenticated from "./components/Authenticated";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="admin"
                    element={
                        <Authenticated fallback={<Navigate to="/login" replace />}>
                            <LayoutAdmin>
                                <Outlet />
                            </LayoutAdmin>
                        </Authenticated>
                    }
                >
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="products">
                        <Route index element={<ProductList />} />
                        <Route path="add" element={<ProductAdd />} />
                        <Route path="edit/:id" element={<ProductEdit />} />
                    </Route>
                </Route>
                <Route path="login" element={<h1>Login</h1>} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </>
    );
}

export default App;
/**
 * B1: npm i @tanstack/react-query
 * B2: bọc ứng dụng trong ReactQueryClientProvider ở file main.js
 * B3: sử dụng useQuery để lấy dữ liệu: list.tsx
 * B4: sử dụng useMutation để thực hiện thao tác thêm, sửa, xóa: add.tsx
 */
