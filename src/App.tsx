import { useEffect, useState } from "react";
import "./App.css";
import { IProduct } from "./interfaces/Product";
import ProductList from "./components/ProductList";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import Count from "./components/Count";

function App() {
    return (
        <>
            <Count />
            <Routes>
                <Route path="/" element="" />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/add" element={<ProductAdd />} />
                <Route path="/products/:id/edit" element={<ProductEdit />} />
            </Routes>
        </>
    );
}

export default App;
