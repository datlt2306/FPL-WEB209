import { useEffect, useState } from "react";
import "./App.css";
import { IProduct } from "./interfaces/Product";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function App() {
    // const [products, setProducts] = useState([]);
    // const [isError, setIsError] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setIsLoading(true);
    //             const { data } = await axios.get("http://localhost:3001/products");
    //             setProducts(data);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setIsError(true);
    //         }
    //     })();
    // }, []);
    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Lỗi rồi</div>;

    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:3000/products");
            return data;
        },
    });

    const { mutate: add, isPending: isAddPending } = useMutation({
        mutationFn: async (product: IProduct) => {
            const { data } = await axios.post("http://localhost:3000/products", product);
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["PRODUCT_KEY"],
            });
        },
    });
    const { mutate: remove } = useMutation({
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
    const { mutate: update } = useMutation({
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
    if (isError) return <div>Lỗi rồi</div>;
    return (
        <>
            <button onClick={() => add({ name: "Sản phẩm mới", price: 200 })}>
                {isAddPending ? "Adding..." : "Add"}
            </button>
            {data.map((product: IProduct) => (
                <div key={product.id}>
                    {product.name}
                    <button
                        onClick={() =>
                            update({ ...product, id: product.id, name: "Sản phẩm update" })
                        }
                    >
                        Update
                    </button>
                    <button onClick={() => remove(product.id!)}>Xóa</button>
                </div>
            ))}
            {/* <Products /> */}
        </>
    );
}

export default App;
