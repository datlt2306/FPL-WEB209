import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductAdd from "./components/ProductAdd";

function App() {
    /**
     * cài đặt:
     * 1. npm i @tanstack/react-query
     * 2. import QueryClientProvider client={queryClient} ở main.js
     * 3.
     */
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home page</h1>} />
                <Route path="/products/add" element={<ProductAdd />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products/:id/edit" element={<ProductDetail />} />
            </Routes>
        </>
    );
}

export default App;
