import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/product";

type Props = {};

const Product = () => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
        <div>
            <Link to="/admin/products/add">Add</Link>
            {products.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default Product;
