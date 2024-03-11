import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAdd from "./components/ProductAdd";
import Products from "./components/Products";
import { IProduct } from "./interfaces/Product";
import { addProduct, editProduct, getProducts } from "./services/product";
import ProductEdit from "./components/ProductEdit";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        (async () => {
            const data = await getProducts();
            setProducts(data);
        })();
    }, []);

    const onHandleAdd = async (product: IProduct) => {
        try {
            const data = await addProduct(product);
            setProducts([...products, data]);
        } catch (error) {}
    };
    const onHandleEdit = async (product: IProduct) => {
        try {
            const data = await editProduct(product);
            setProducts(products.map((item) => (item.id == data.id ? data : item)));
        } catch (error) {}
    };
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home page</h1>} />
                <Route path="products" element={<Products products={products} />} />
                <Route path="products/add" element={<ProductAdd onAdd={onHandleAdd} />} />
                <Route path="products/:id/edit" element={<ProductEdit onEdit={onHandleEdit} />} />
            </Routes>
        </>
    );
}

export default App;
