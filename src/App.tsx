import { Route, Routes } from "react-router-dom";
import "./App.css";
import Count from "./components/Count";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [isError, setIsError] = useState(false);
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setIsLoading(true);
    //             const { data } = axios.get(`http://localhost:3001/products`);
    //             setProducts(data);
    //             setIsLoading(false);
    //             setIsError(false);
    //         } catch (error) {
    //             setIsError(true);
    //         }
    //     })();
    // }, []);

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error</div>;

    const { data, isLoading, isError } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    return (
        <>
            {data.map((item: any) => (
                <div>{item.name}</div>
            ))}
            {/* <Count />
            <Routes>
                <Route path="/" element="" />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/add" element={<ProductAdd />} />
                <Route path="/products/:id/edit" element={<ProductEdit />} />
            </Routes> */}
        </>
    );
}

export default App;
