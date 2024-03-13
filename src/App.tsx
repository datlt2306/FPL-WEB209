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
            <Counter />
        </>
    );
}

export default App;
