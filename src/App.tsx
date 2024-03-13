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

    const onHandleAdd = async (product: IProduct) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            // rerender
            setProducts([...products, data]);
        } catch (error) {}
    };
    const onHandleEdit = async (product: IProduct) => {
        try {
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            // rerender
            setProducts(products.map((item) => (item.id === product.id ? product : item)));
        } catch (error) {}
    };

    return (
        <>
            <Count />
            <Routes>
                <Route path="/" element="" />
                <Route
                    path="/products"
                    element={<ProductList products={products} removeItem={onHandleRemove} />}
                />
                <Route path="/product/add" element={<ProductAdd onAdd={onHandleAdd} />} />
                <Route path="/product/:id/edit" element={<ProductEdit onEdit={onHandleEdit} />} />
            </Routes>
        </>
    );
}

export default App;
