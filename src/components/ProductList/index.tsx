import {
    useAddProductMutation,
    useGetProductsQuery,
    useRemoveProductMutation,
    useUpdateProductMutation,
} from "@/api/product";
import { add } from "@/slices/Cart";
import { useAppDispatch } from "@/store/hook";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const { data: products, error, isLoading: isLoadingFetching } = useGetProductsQuery();
    const [addProduct, resultAdd] = useAddProductMutation();

    const [removeProduct] = useRemoveProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    if (isLoadingFetching) return <Skeleton count={3} />;
    if (error) {
        if ("data" in error && "status" in error) {
            return (
                <div>
                    {error.status} - {JSON.stringify(error.data)}
                </div>
            );
        }
    }
    return (
        <div>
            {products?.map((product: any) => (
                <div key={product.id} className="mb-3">
                    {product.name}{" "}
                    <Button
                        type="primary"
                        onClick={() => dispatch(add({ ...product, quantity: 1 }))}
                    >
                        Add to cart
                    </Button>
                </div>
            ))}
            <Button onClick={() => addProduct({ name: "Product Added 1" })}>
                {resultAdd.isLoading ? "Loading" : "Add"}
            </Button>
            <Button onClick={() => updateProduct({ name: "Product Updated 1", id: 3 })}>
                Update
            </Button>
            <Button onClick={() => removeProduct(3)}>Delete</Button>
        </div>
    );
};

export default ProductList;
