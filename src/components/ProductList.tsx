import { Link } from "react-router-dom";
import useProductQuery from "../hooks/useProductQuery";
import { IProduct } from "../interfaces/Product";
import { useProductMutation } from "../hooks/useProductMutation";

const ProductList = () => {
    const { data: products } = useProductQuery();
    const { mutate } = useProductMutation({ action: "DELETE" });
    return (
        <div>
            {products?.map((item: IProduct, index: number) => (
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <button onClick={() => mutate(item)}>Remove</button>
                    <Link to={`/products/${item.id}/edit`}>Edit</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
