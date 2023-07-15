import { IProduct } from "@/interfaces/product";
import axios from "axios";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state: any) => state.product);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // call api
                const { data } = await axios.get(`http://localhost:3000/products`);
                //rerender
                dispatch({ type: "product/fetch", payload: data });
            } catch (error: any) {
            } finally {
            }
        };
        fetchProducts();
    }, []);
    if (error) return <div>Something went wrong</div>;

    const addProduct = async (product: IProduct) => {
        try {
            // call api
            const { data } = await axios.post(`http://localhost:3000/products`, product);
            // rerender
            dispatch({ type: "product/add", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    const editProduct = async (product: IProduct) => {
        try {
            // call api
            const { data } = await axios.put(
                `http://localhost:3000/products/${product.id}`,
                product
            );
            // rerender
            dispatch({ type: "product/edit", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    const deleteProduct = async (id: number) => {
        try {
            // call api
            await axios.delete(`http://localhost:3000/products/${id}`);
            // rerender
            dispatch({ type: "product/delete", payload: id });
        } catch (error: any) {
        } finally {
        }
    };
    return (
        <div>
            {isLoading ? (
                <Skeleton count={4} height={35} />
            ) : (
                products?.map((item: IProduct) => {
                    return <div key={item.id}>{item.name}</div>;
                })
            )}

            <Button
                type="primary"
                onClick={() => addProduct({ name: "Product Added", price: 500 })}
            >
                Add Product
            </Button>
            <Button type="primary" onClick={() => editProduct({ name: "Product Updated", id: 3 })}>
                Edit Product
            </Button>
            <Button type="danger" onClick={() => deleteProduct(3)}>
                Delete Product
            </Button>
        </div>
    );
};

export default ProductList;
