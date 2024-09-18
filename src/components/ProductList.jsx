/* eslint-disable react/prop-types */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const ProductList = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/products`);
            return response.data;
        },
    });
    const mutation = useMutation({
        mutationFn: async (id) => {
            await axios.delete(`http://localhost:3000/products/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            {data.map((product) => (
                <div key={product.id}>
                    {product.name} - {product.price}
                    <button onClick={() => mutation.mutate(product.id)}>Xóa</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
