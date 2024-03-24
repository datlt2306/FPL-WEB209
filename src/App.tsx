import { useEffect, useState } from "react";
import "./App.css";
import { IProduct } from "./interfaces/Product";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";

function App() {
    // const { mutate: remove } = useMutation({
    //     mutationFn: async (id: number) => {
    //         const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
    //         return data;
    //     },
    //     onSuccess: () => {
    //         // refetching
    //         queryClient.invalidateQueries({
    //             queryKey: ["PRODUCT_KEY"],
    //         });
    //     },
    // });
    // const { mutate: update } = useMutation({
    //     mutationFn: async (product: IProduct) => {
    //         const { data } = await axios.put(
    //             `http://localhost:3000/products/${product.id}`,
    //             product
    //         );
    //         return data;
    //     },
    //     onSuccess: () => {
    //         // refetching
    //         queryClient.invalidateQueries({
    //             queryKey: ["PRODUCT_KEY"],
    //         });
    //     },
    // });

    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Lỗi rồi</div>;
    return (
        <>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route index element={<Products />} />
                <Route path="products/add" element={<ProductAdd />} />
                <Route path="products/:id/edit" element={<ProductEdit />} />
                <Route path="*" element={<h1>Not Found Page</h1>} />
            </Routes>
        </>
    );
}

export default App;
