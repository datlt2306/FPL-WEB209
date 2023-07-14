import { instance } from "@/axios/config";
import { ProductContext } from "@/context/Product";
import { useContext, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Button } from "..";

const ProductList = () => {
    const { state, dispatch } = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await instance.get("/products");

                dispatch({ type: "FETCH_PRODUCTS", payload: data });
            } catch (error: any) {
            } finally {
            }
        };
        fetchProducts();
    }, []);
    const addProduct = async (product: any) => {
        try {
            const data = await instance.post("/products", product);
            dispatch({ type: "ADD_PRODUCT", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    // const removeProduct = async (product: any) => {
    //     setIsLoading(true);
    //     await pause(1000);
    //     try {
    //         await instance.delete(`/products/${product.id}`);
    //         setProducts(products.filter((item) => item.id !== product.id));
    //     } catch (error: any) {
    //         setError(error.message);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };
    // const updateProduct = async (product: any) => {
    //     setIsLoading(true);
    //     await pause(1000);
    //     try {
    //         await instance.put(`/products/${product.id}`, product);
    //         setProducts(products.map((item) => (item.id === product.id ? product : item)));
    //     } catch (error: any) {
    //         setError(error.message);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };
    if (state.isLoading) return <Skeleton count={3} />;
    if (state.error) return <div>{state.error}</div>;
    return (
        <div>
            {state?.products?.map((product: any) => (
                <div key={product.id}>{product.name}</div>
            ))}

            <Button onClick={() => addProduct({ name: "Product Added 1" })}>Thêm</Button>
            {/* 
            <Button onClick={() => updateProduct({ name: "Product Updated", id: 4 })}>
                Updated
            </Button>
            <Button onClick={() => removeProduct({ id: 4 })}>Delete</Button> */}
        </div>
    );
};

export default ProductList;
