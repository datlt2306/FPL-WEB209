import { ProductContext } from "@/context/ProductProvider";
import { IProduct } from "@/interfaces/product";
import React, { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";
import axios from "axios";

const ProductList = () => {
    const { state, dispatch } = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // call api
                const { data } = await axios.get(`http://localhost:3000/products`);
                //rerender
                dispatch({ type: "FETCH_PRODUCTS", payload: data });
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
            dispatch({ type: "ADD_PRODUCT", payload: data });
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
            {/* <Button type="primary" onClick={() => editProduct({ name: "Product Updated", id: 3 })}>
                Edit Product
            </Button>
            <Button type="danger" onClick={() => deleteProduct({ id: 3 })}>
                Delete Product
            </Button> */}
        </div>
    );
};

export default ProductList;
