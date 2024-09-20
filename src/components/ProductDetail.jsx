import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            return data;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    return <div>{data?.name}</div>;
};

export default ProductDetail;
