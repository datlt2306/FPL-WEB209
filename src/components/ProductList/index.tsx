import { instance } from "@/axios/config";
import { ProductContext } from "@/context[draft]/ProductContext";
import { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";

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
    const addProduct = async (product: any) => {
        try {
            const data = await instance.post(`/products`, product);
            dispatch({ type: "ADD_PRODUCT", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    const removeProduct = async (product: any) => {
        try {
            await instance.delete(`/products/${product.id}`);
            dispatch({ type: "DELETE_PRODUCT", payload: product.id });
        } catch (error: any) {
        } finally {
        }
    };
    const updateProduct = async (product: any) => {
        try {
            const data = await instance.put(`/products/${product.id}`, product);
            dispatch({ type: "UPDATE_PRODUCT", payload: data });
        } catch (error: any) {
        } finally {
        }
    };

    if (state.isLoading) return <Skeleton count={3} height={35} />;
    if (state.error) return <div>{state.error}</div>;
    return (
        <div>
            {state?.products?.map((item: any) => {
                return <div key={item.id}>{item.name}</div>;
            })}

            <Button type="primary" onClick={() => addProduct({ name: "Product C" })}>
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
            </Button>
        </div>
    );
};

export default ProductList;
