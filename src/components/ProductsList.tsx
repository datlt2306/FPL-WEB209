import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, fetchProducts, deleteProduct, changeProduct } from "../actions/product";
import { IProduct } from "../interfaces/Product";
const ProductsList = () => {
    const products = useSelector((state) => state.product.value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const createProduct = () => {
        dispatch(addProducts({ name: "Product C" }));
    };
    const removeProduct = (id: any) => {
        dispatch(deleteProduct(id));
    };
    const updateProduct = () => {
        dispatch(changeProduct({ id: 1, name: "Product A updated" }));
    };
    return (
        <div>
            <button onClick={createProduct}>Add Product</button>
            <button onClick={updateProduct}>Update Product</button>
            {products.map((product: IProduct) => {
                return (
                    <div>
                        {product.name}{" "}
                        <button onClick={() => removeProduct(product.id)}>Xóa</button>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductsList;
