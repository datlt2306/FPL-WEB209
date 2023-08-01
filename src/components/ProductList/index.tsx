import {
    useAddProductMutation,
    useGetProductsQuery,
    useRemoveProductMutation,
    useUpdateProductMutation,
} from "@/api/product";
import { IProduct } from "@/interfaces/product";
import { add } from "@/slices/cart";
import { useAppDispatch } from "@/store/hook";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "..";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const { data: products, error, isLoading: isLoadingFetching } = useGetProductsQuery();
    const [addProduct, resultAdd] = useAddProductMutation();
    const [removeProduct] = useRemoveProductMutation();
    const [updateProduct] = useUpdateProductMutation();

    // adding
    console.log(resultAdd);
    if (resultAdd.isLoading) return <div>Adding...</div>;

    // fetching
    if (isLoadingFetching) return <div>Loading...</div>;
    if (error) return <div>Something went wrong</div>;
    return (
        <div>
            {products?.map((item: IProduct) => {
                return (
                    <div key={item.id}>
                        {item.name}{" "}
                        <Button
                            onClick={() => dispatch(add({ ...item, quantity: 1 }))}
                            type="primary"
                            icon={<AiOutlinePlus />}
                        />
                    </div>
                );
            })}

            <Button
                type="primary"
                onClick={() => addProduct({ name: "Product Added", price: 500 })}
            >
                Add Product
            </Button>
            <Button
                type="primary"
                onClick={() => updateProduct({ name: "Product Updated", id: 3 })}
            >
                Edit Product
            </Button>
            <Button type="danger" onClick={() => removeProduct(3)}>
                Delete Product
            </Button>
        </div>
    );
};

export default ProductList;
