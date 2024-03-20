import { Route, Routes } from "react-router-dom";
import "./App.css";
import Count from "./components/Count";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "./interfaces/Product";

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

    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data;
        },
    });

    const { mutate: add, isPending: isAddPending } = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            return data;
        },
        onSuccess: () => {
            // refetching
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });
    const { mutate: remove, isPending: isRemovePending } = useMutation({
        mutationFn: async (id: number) => {
            const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
            return data;
        },
        onSuccess: () => {
            // refetching
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });
    const { mutate: update, isPending: isUpdating } = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            return data;
        },
        onSuccess: () => {
            // refetching
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    return (
        <>
            <button onClick={() => add({ name: "AAAAA", price: 2000, desc: "Mô tả" })}>
                {isAddPending ? "Loading..." : "Thêm sản phẩm"}
            </button>
            {data.map((item: any) => (
                <div key={item.id}>
                    {item.name}
                    <button onClick={() => update({ ...item, id: item.id, name: "Update A" })}>
                        Cập nhật
                    </button>
                    <button onClick={() => remove(item.id!)}>
                        {isRemovePending ? "Deleting..." : "Xóa"}
                    </button>
                </div>
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
