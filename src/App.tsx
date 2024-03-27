import { Route, Routes } from "react-router-dom";
import "./App.css";
import useProductQuery from "./hooks/useProductQuery";
import { IProduct } from "./interfaces/Product";
import ProductList from "./components/ProductList";
import ProductEdit from "./components/ProductEdit";
import ProductAdd from "./components/ProductAdd";
import { useLocalStorage } from "./hooks/useStorage";

function App() {
    const [name, setName, removeName] = useLocalStorage("name", "");
    return (
        <>
            {name}
            <button onClick={() => setName("Dat")}>Set Name</button>
            <button onClick={removeName}>Remove Name</button>
            <Routes>
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/add" element={<ProductAdd />} />
                <Route path="/products/:id/edit" element={<ProductEdit />} />
            </Routes>
        </>
    );
}

export default App;
