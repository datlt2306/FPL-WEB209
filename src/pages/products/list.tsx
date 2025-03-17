import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import { getList } from "../../provider/dataProvider";
import useList from "../../hooks/useList";

const ProductList = () => {
    const { data, isLoading, isError, error } = useList({ resource: "products" });

    if (isLoading) return <div>Loading....</div>;
    if (isError) return <div>Error: {error.message}</div>;
    if (!data) return <div>Không có sản phẩm</div>;
    return (
        <div>
            <h1>Product List</h1>
            <Link to="/products/add">Add Product</Link>
            <ul>
                {data?.data.map((item: any) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

// client state
// server state
