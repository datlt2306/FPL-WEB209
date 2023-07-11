import ProductContext from "@/context/Product.tsx";
import { useContext } from "react";

const List = () => {
    const { products, setProducts } = useContext(ProductContext) as any;
    return (
        <div>
            {products.map((item: any) => item.name)}
            <button onClick={() => setProducts([...products, { id: 3, name: "Product D" }])}>
                Add
            </button>
        </div>
    );
};

export default List;
