import ProductContext from "@/context/Product.tsx";
import { useContext, useEffect } from "react";

const List = () => {
    const { products, fetchProducts, addProduct, deleteProduct, updateProduct } = useContext(
        ProductContext
    ) as any;
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div>
            {products.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <button onClick={() => deleteProduct(item.id!)}>Delete</button>
                        <button
                            onClick={() =>
                                updateProduct({ name: "Product C updated", id: item.id })
                            }
                        >
                            Edit
                        </button>
                    </div>
                );
            })}
            <button onClick={() => addProduct({ name: "Product C" })}>Add</button>
        </div>
    );
};

export default List;
