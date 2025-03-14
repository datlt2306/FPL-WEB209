import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/products/list";
import ProductAdd from "./pages/products/add";
import ProductEdit from "./pages/products/edit";
import Counter from "./Counter";

function App() {
    return (
        <>
            {/* <Counter /> */}
            <Routes>
                <Route path="products">
                    <Route index element={<ProductList />} />
                    <Route path="add" element={<ProductAdd />} />
                    {/* <Route path="edit/:id" element={<ProductEdit />} /> */}
                </Route>
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
