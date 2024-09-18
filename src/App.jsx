import { Route, Routes } from "react-router-dom";
import ProductAdd from "./components/ProductAdd";
import ProductList from "./components/ProductList";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/add" element={<ProductAdd />} />
                <Route path="/products" element={<ProductList />} />
            </Routes>
        </>
    );
};

export default App;

// npm i json-server-auth json-server@0.17.4
// npm run server

/**
 * Bước 1: Cài đặt thư viện npm i @tanstack/react-query
 * Bước 2: truy cập file main.js, sử dụng component : QueryClientProvider
 */
