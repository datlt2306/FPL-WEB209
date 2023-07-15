import { useSelector } from "react-redux";

const ProductList = () => {
    const { products } = useSelector((state: any) => state.products);
    console.log("state", products);

    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default ProductList;
