import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import Products from "./components/Products";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home page</h1>} />
                <Route path="products" element={<Products />} />
                {/* <Route path="products/add" element={<ProductAdd />} /> */}
                {/* <Route path="products/:id/edit" element={<ProductEdit />} /> */}
            </Routes>
        </>
    );
}

export default App;
