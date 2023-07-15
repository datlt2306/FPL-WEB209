import { ProductContext } from "@/context/ProductProvider";
import { IProduct } from "@/interfaces/product";
import React, { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";
import axios from "axios";

const ProductList = () => {
    const { state, dispatch } = useContext(ProductContext);
    console.log("state", state);
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
    if (state.error) return <div>Something went wrong</div>;

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
            {state.isLoading ? (
                <Skeleton count={4} height={35} />
            ) : (
                state?.products?.map((item: IProduct) => {
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
