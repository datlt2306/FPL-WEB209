import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Product from "./components/Product";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/add" element={<ProductAdd />} />
                <Route path="/edit/:id" element={<ProductEdit />} />
            </Routes>
        </div>
    );
}

export default App;
