import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getList } from "../../api/dataProvider";

const ProductList = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => {
            return getList({ resource: "products" });
        },
    });

    if (isLoading) return <div>Loading....</div>;
    if (isError) return <div>Error: {error.message}</div>;
    return (
        <div>
            <h1>Product List</h1>
            <Link to="/products/add">Add Product</Link>
            <ul>
                {data.map((item: any) => (
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
