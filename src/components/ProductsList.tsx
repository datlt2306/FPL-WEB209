import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addProducts, fetchProducts, deleteProduct, changeProduct } from "../actions/product";
import { IProduct } from "../interfaces/Product";
import { RootState } from "../reducers";
const ProductsList = () => {
    const products = useSelector((state: RootState) => state.product.value);
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
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
