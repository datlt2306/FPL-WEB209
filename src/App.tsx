import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import { addProduct, editProduct, getProducts, removeProduct } from "./services/product";
import { IProduct } from "./interfaces/Product";
import Counter from "./components/Counter";

function App() {
    return (
        <>
            {/* <Counter /> */}
            <Routes>
                <Route path="/" element={<h1>Home page</h1>} />
                <Route path="products" element={<Products />} />
                {/* <Route path="products/add" element={<ProductAdd />} />
                <Route path="products/:id/edit" element={<ProductEdit />} /> */}
            </Routes>
        </>
    );
}

export default App;
