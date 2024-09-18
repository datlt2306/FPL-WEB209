import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import { useQuery } from "@tanstack/react-query";

function App() {
    /**
     * cài đặt:
     * 1. npm i @tanstack/react-query
     * 2. import QueryClientProvider client={queryClient} ở main.js
     * 3.
     */

    // const [products, setProducts] = useState([]);
    // const [product, setProduct] = useState({});
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // // useEffect(() => {
    //     (async () => {
    //         try {
    //             setLoading(true);
    //             const response = await axios.get(`http://localhost:3000/products`);
    //             if (response.status !== 200) {
    //                 throw new Error("Có lỗi xảy ra");
    //             }
    //             setProducts(response.data);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     })();
    // }, []);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data;
        },
    });
    const onHandleSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     const response = await axios.post(`http://localhost:3000/products`, product);
        //     if (response.status !== 201) {
        //         throw new Error("Có lỗi xảy ra");
        //     }
        //     console.log(`Thêm sản phẩm thành công`);
        //     setProducts([...products, response.data]);
        // } catch (error) {
        //     throw new Error(error);
        // }
    };
    const onHandleChange = (e) => {
        // const { name, value, type, checked } = e.target;
        // setProduct({ ...product, [name]: type === "checkbox" ? checked : value });
    };
    // const onRemove = async (id) => {
    //     try {
    //         setLoading(true);
    //         const response = await axios.delete(`http://localhost:3000/products/${id}`);
    //         if (response.status !== 200) {
    //             throw new Error("Có lỗi xảy ra");
    //         }
    //         setProducts(products.filter((product) => product.id !== id));
    //         alert("Xóa sản phẩm thành công");
    //     } catch (error) {
    //         setError(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>{error.message}</p>;
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home page</h1>} />
                <Route
                    path="/add"
                    element={
                        <form onSubmit={onHandleSubmit}>
                            <input type="text" name="name" onChange={onHandleChange} />
                            <input type="number" name="price" onChange={onHandleChange} />
                            <input type="text" name="pictureUrl" onChange={onHandleChange} />
                            <select name="category" onChange={onHandleChange}>
                                <option value="1">Danh mục A</option>
                                <option value="2">Danh mục b</option>
                            </select>
                            <textarea name="description" onChange={onHandleChange}></textarea>
                            <input type="checkbox" name="available" onChange={onHandleChange} />
                            <button>Submit</button>
                        </form>
                    }
                />
                <Route path="/products" element={<ProductList products={data} />} />
            </Routes>
        </>
    );
}

export default App;
