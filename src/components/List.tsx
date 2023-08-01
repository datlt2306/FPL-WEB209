import { addProduct, deleteProduct, fetchProducts, updateProduct } from "@/actions/product";
import { useAddProductMutation, useGetProductsQuery } from "@/api/product";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { add } from "@/slices/Cart";
import { useEffect } from "react";
const List = () => {
    const dispatch = useAppDispatch();
    const { data: products, error, isLoading } = useGetProductsQuery();
    const [ahihi] = useAddProductMutation();
    return (
        <div>
            {products?.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name}
                        <button
                            onClick={() => dispatch(add({ ...item, quantity: 1 }))}
                            className="bg-blue-500 text-white p-2"
                        >
                            Add to cart
                        </button>
                    </div>
                );
            })}
            <button className="border bg-blue-500 p-2" onClick={() => ahihi({ name: "test" })}>
                Add Product
            </button>
            {/* 
            <button
                className="border bg-blue-500 p-2"
                onClick={() => dispatch(updateProduct({ name: "test updated", id: 4 }))}
            >
                Update Product
            </button>
            <button className="border bg-blue-500 p-2" onClick={() => dispatch(deleteProduct(4))}>
                Delete Product
            </button> */}
        </div>
    );
};

export default List;
