# Ghi chú buổi 3

## Nội dung buổi học

-   Cài đặt môi trường làm việc
-   Cài đặt `react-router-dom` và sử dụng createBrowser()
-   Cài đặt `antd`
-   Cài đặt `tailwindcss`

## Cài đặt môi trường làm việc

### Cài đặt NodeJS

-   Truy câp trang chủ của NodeJS: [https://nodejs.org/en/](https://nodejs.org/en/)
-   Kiểm tra NodeJS đã cài đặt thành công chưa

```bash
node -v
```

### Cài đặt Vite

-   Sử dụng câu lệnh sau để cài đặt Project sử dụng ViteJs

```bash
npm create vite@latest [ten-du-an] -- --template react-ts
cd [ten-du-an]
npm i
npm run dev
```

## Cài đặt React-router-dom

### Bước 1: Cài đặt react-router-dom

-   Sử dụng câu lệnh sau để cài đặt `react-router-dom`

```bash
npm i react-router-dom
```

### Bước 2: Sử dụng react-router-dom

-   Bước 1: Tạo file `routers.tsx` ở thư mục src với nội dung như sau file :

```tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
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
            { index: true, element: <Navigate to="/admin/dashboard" /> },
            { path: "dashboard", element: <DashboardPage /> },
            { path: "products", element: <AdminProductsPage /> },
        ],
    },
]);
```

> Lưu ý: Tạo các folder page trước khi gọi ra

-   Bước 2: Truy cập file `main.tsx` chỉnh sửa code như sau:

````tsx
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routers";

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);

## Cài đặt và sử dụng antd

### Bước 1: Cài đặt antd

```bash
npm i antd --save
````

### Bước 2: Sử dụng component Layout

-   Truy cập vào trang component của antd: [https://ant.design/components/layout](https://ant.design/components/layout)
-   Copy code của component Layout
-   Dán vào file `/(admin)/layout.tsx`
-   Sửa lại tên component thành `LayoutAdmin`
-   Sử dụng `<Outlet />` cho vị trí hiển thị nội dung
