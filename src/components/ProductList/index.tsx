import { instance } from "@/axios/config";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state: any) => state.products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // call api
                const data = await instance.get(`/products`);
                // rerender
                dispatch({ type: "product/fetchProducts", payload: data });
            } catch (error: any) {
            } finally {
            }
        };
        fetchProducts();
    }, []);
    const addProduct = async (product: any) => {
        try {
            const data = await instance.post(`/products`, product);
            dispatch({ type: "product/addProduct", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    const removeProduct = async (product: any) => {
        try {
            await instance.delete(`/products/${product.id}`);
            dispatch({ type: "product/deleteProduct", payload: product.id });
        } catch (error: any) {
        } finally {
        }
    };
    const updateProduct = async (product: any) => {
        try {
            const data = await instance.put(`/products/${product.id}`, product);
            dispatch({ type: "product/updateProduct", payload: data });
        } catch (error: any) {
        } finally {
        }
    };

    if (isLoading) return <Skeleton count={3} height={35} />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((item: any) => {
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
