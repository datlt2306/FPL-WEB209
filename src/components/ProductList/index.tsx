import { ProductContext } from "@/context/productContext";
import { useContext } from "react";

const ProductList = () => {
    const { products, addProduct } = useContext(ProductContext);
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}

            <button onClick={() => addProduct({ id: 3, name: "Product C" })}>Add Product</button>
        </div>
    );
};

export default ProductList;
