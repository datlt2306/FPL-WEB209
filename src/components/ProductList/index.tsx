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
                const data = await instance.get("/products");

                dispatch({ type: "product/fetchProducts", payload: data });
            } catch (error: any) {
            } finally {
            }
        };
        fetchProducts();
    }, []);
    const addProduct = async (product: any) => {
        try {
            const data = await instance.post("/products", product);
            dispatch({ type: "product/addProduct", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    const removeProduct = async (id: any) => {
        try {
            await instance.delete(`/products/${id}`);
            dispatch({ type: "product/deleteProduct", payload: id });
        } catch (error: any) {
        } finally {
        }
    };
    const updateProduct = async (product: any) => {
        try {
            const data = await instance.put(`/products/${product.id}`, product);

            console.log(data);
            dispatch({ type: "product/updateProduct", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    if (isLoading) return <Skeleton count={3} />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            {products?.map((product: any) => (
                <div key={product.id}>{product.name}</div>
            ))}

            <Button onClick={() => addProduct({ name: "Product Added 1" })}>Thêm</Button>

            <Button onClick={() => updateProduct({ name: "Product Updated", id: 4 })}>
                Updated
            </Button>
            <Button onClick={() => removeProduct(4)}>Delete</Button>
        </div>
    );
};

export default ProductList;
