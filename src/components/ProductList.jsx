/* eslint-disable react/prop-types */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const ProductList = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products`);
            return data;
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (id) => {
            await axios.delete(`http://localhost:3000/products/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>{error.message}</p>;
    if (isPending) return <p>Deleting...</p>;
    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            {data.map((product) => (
                <div key={product.id}>
                    {product.name} - {product.price}
                    <button onClick={() => mutate(product.id)}>Xóa</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
