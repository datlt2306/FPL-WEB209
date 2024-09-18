import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductAdd from "./components/ProductAdd";
import ProductList from "./components/ProductList";

const App = () => {
    // const [products, setProducts] = useState([]);
    // const [product, setProduct] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    // const [isPending, setIsPending] = useState(false);
    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setIsLoading(true);
    //             const response = await axios.get(`http://localhost:3000/products`);
    //             if (response.status !== 200) {
    //                 throw new Error("Lỗi khi gọi API");
    //             }
    //             const data = await response.data;
    //             setProducts(data);
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.error("Lỗi khi gọi API: ", error);
    //             setError(error);
    //             setIsLoading(false);
    //         }
    //     })();
    // }, []);

    // const onHandleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     // computed property name
    //     setProduct({ ...product, [name]: type == "checkbox" ? checked : value });
    // };
    // const onHandleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         setIsPending(true);
    //         const response = await axios.post(`http://localhost:3000/products`, product);
    //         if (response.status !== 201) {
    //             throw new Error("Lỗi khi thêm sản phẩm");
    //         }
    //         setProducts([...products, response.data]);
    //         setIsPending(false);
    //     } catch (error) {
    //         throw new Error("Lỗi khi thêm sản phẩm", error);
    //     }
    // };

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;
    // if (isPending) return <div>Adding product...</div>;
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route
                    path="/add"
                    element={
                        <ProductAdd
                        // onHandleSubmit={onHandleSubmit}
                        // onHandleChange={onHandleChange}
                        />
                    }
                />
                <Route path="/products" element={<ProductList />} />
            </Routes>
        </>
    );
};

export default App;

// npm i json-server-auth json-server@0.17.4
// npm run server

/**
 * Bước 1: Cài đặt thư viện npm i @tanstack/react-query
 * Bước 2: truy cập file main.js, sử dụng component : QueryClientProvider
 */
