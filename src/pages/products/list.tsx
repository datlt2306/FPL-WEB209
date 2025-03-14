import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { getList } from "../../api/dataProvider";

const ProductList = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => getList({ resource: "products" }),
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error?.message}</div>;
    return (
        <div>
            <h1>Product List</h1>
            <Link to="/products/add">Add Product</Link>
            {data?.data?.map((item: any, index: number) => (
                <li key={item?.id}>
                    <span>{item?.name}</span>
                </li>
            ))}
        </div>
    );
};

export default ProductList;

// client state
// server state
