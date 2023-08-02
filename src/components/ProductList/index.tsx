// import { fetchProducts } from "@/actions/product";
import { addProduct, removeProduct } from "@/actions/product";
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

    const { data: products, error, isLoading } = useGetProductsQuery();
    const [addProduct] = useAddProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [removeProduct] = useRemoveProductMutation();
    if (isLoading) return <Skeleton count={3} height={35} />;
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
            {products?.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <Button
                            type="primary"
                            onClick={() => dispatch(add({ ...item, quantity: 1 }))}
                        >
                            Add to cart
                        </Button>
                    </div>
                );
            })}

            <Button type="primary" onClick={() => addProduct({ name: "Product C", price: 200 })}>
                Add Product
            </Button>

            <Button
                type="primary"
                onClick={() => updateProduct({ name: "Product C updated ", id: 3, price: 200 })}
            >
                Update Product
            </Button>
            <Button type="primary" onClick={() => removeProduct(3)}>
                Delete Product
            </Button>
        </div>
    );
};

export default ProductList;
