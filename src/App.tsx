import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Product from "./components/product";
import ProductAdd from "./components/product-add";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutPrivate from "./layouts/LayoutPrivate";
import LayoutWebsite from "./layouts/LayoutWebsite";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<h1>Home Page</h1>} />
                    <Route path="about" element={<h1>About Page</h1>} />
                </Route>
                <Route
                    path="/admin"
                    element={
                        <LayoutPrivate>
                            <LayoutAdmin />
                        </LayoutPrivate>
                    }
                >
                    <Route index element={<h1>Dashboard</h1>} />
                    <Route path="products" element={<Product />} />
                    <Route path="products/add" element={<ProductAdd />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </div>
    );
}

export default App;
