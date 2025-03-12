import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/products/list";
import ProductAdd from "./pages/products/add";
import ProductEdit from "./pages/products/edit";
import Counter from "./components/Counter";

function App() {
    return (
        <>
            <Counter />
            <Routes>
                <Route path="products">
                    <Route index element={<ProductList />} />
                    <Route path="add" element={<ProductAdd />} />
                    <Route path="edit/:id" element={<ProductEdit />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
