import { instance } from "@/axios/config";
import { ProductContext } from "@/context/ProductContext";
import { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const ProductList = () => {
    // const { products, fetchProducts, isLoading, error, addProduct, removeProduct, updateProduct } =
    //     useContext(ProductContext);
    const { state, dispatch } = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // call api
                const data = await instance.get(`/products`);
                // rerender
                dispatch({ type: "FETCH_PRODUCTS", payload: data });
            } catch (error: any) {
            } finally {
            }
        };
        fetchProducts();
    }, []);

    if (state.isLoading) return <Skeleton count={3} height={35} />;
    if (state.error) return <div>{state.error}</div>;
    return (
        <div>
            {state?.products?.map((item: any) => {
                return <div key={item.id}>{item.name}</div>;
            })}

            {/* <Button type="primary" onClick={() => addProduct({ name: "Product C" })}>
                Add Product
            </Button>
            <Button
                type="primary"
                onClick={() => updateProduct({ name: "Product C updated ", id: 3 })}
            >
                Update Product
            </Button>
            <Button type="primary" onClick={() => removeProduct({ id: 3 })}>
                Delete Product
            </Button> */}
        </div>
    );
};

export default ProductList;
