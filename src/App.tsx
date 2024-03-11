import { useEffect, useState } from "react";
import "./App.css";
import { IProduct } from "./interfaces/Product";
import ProductList from "./components/ProductList";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import ProductAdd from "./components/ProductAdd";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                setProducts(data);
            } catch (error) {}
        })();
    }, []);

    const onHandleRemove = async (id: number) => {
        try {
            const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
            setProducts(products.filter((item) => item.id !== id));
        } catch (error) {}
    };

    return (
        <>
            <Routes>
                <Route path="/" element="" />
                <Route
                    path="/products"
                    element={<ProductList products={products} removeItem={onHandleRemove} />}
                />
                <Route path="/product/add" element={<ProductAdd />} />
            </Routes>
        </>
    );
}

export default App;
