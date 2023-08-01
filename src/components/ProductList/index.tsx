import { addProduct, deleteProduct, getProducts, updateProduct } from "@/actions/product";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { useEffect } from "react";
import { Button } from "..";
import { add } from "@/slices/Cart";
import { useAddProductMutation, useGetProductsQuery } from "@/api/product";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const { data: products, error, isLoading } = useGetProductsQuery();
    const [addProduct, resultAdd] = useAddProductMutation();
    const [updateProduct, resultUpdate] = useAddProductMutation();
    const [removeProduct, resultRemove] = useAddProductMutation();

    console.log("result", result);
    if (isLoading) return <div>Loading...</div>;
    if (error) {
        if ("status" in error && "data" in error) {
            return (
                <div>
                    {error.status} - {JSON.stringify(error.data)}
                </div>
            );
        }
    }
    return (
        <div>
            {products?.map((item: any) => (
                <div key={item.id}>
                    {item.name}
                    <Button
                        type="primary"
                        onClick={() =>
                            // dispatch({ type: "cart/add", payload: { ...item, quantity: 1 } })
                            dispatch(add({ ...item, quantity: 1 }))
                        }
                    >
                        Add to cart
                    </Button>
                </div>
            ))}
            <div className="my-4 flex space-x-4 justify-center">
                <Button type="primary" onClick={() => addProduct({ name: "Product C" })}>
                    Add
                </Button>
                <Button
                    type="primary"
                    onClick={() => updateProduct({ name: "Product C updated", id: 3 })}
                >
                    Update
                </Button>
                <Button type="danger" onClick={() => removeProduct(3)}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default ProductList;
