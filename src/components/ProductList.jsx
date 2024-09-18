/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProductList = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/productsssss`);
            return response.data;
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
                </div>
            ))}
        </div>
    );
};

export default ProductList;
