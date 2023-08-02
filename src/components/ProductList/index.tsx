// import { fetchProducts } from "@/actions/product";
import { addProduct, removeProduct } from "@/actions/product";
import { useGetProductsQuery } from "@/api/product";
import { add } from "@/slices/Cart";
import { useAppDispatch } from "@/store/hook";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";

const ProductList = () => {
    const dispatch = useAppDispatch();

    const { data: products, error, isLoading } = useGetProductsQuery();
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

            <Button type="primary" onClick={() => addProduct({ name: "Product D" })}>
                Add Product
            </Button>

            {/* <Button
                type="primary"
                onClick={() => dispatch(updateProduct({ name: "Product C updated ", id: 3 }))}
            >
                Update Product
            </Button> */}
            <Button type="primary" onClick={() => removeProduct(3)}>
                Delete Product
            </Button>
        </div>
    );
};

export default ProductList;
