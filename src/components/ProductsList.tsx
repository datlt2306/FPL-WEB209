import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IProduct } from "../interfaces/Product";
import { RootState } from "../reducers[draft]";
import { fetchProducts } from "../slice/product";
const ProductsList = () => {
    const { value: products, isLoading } = useSelector((state: RootState) => state.product);
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    if (isLoading) return <div>Loading...</div>;
    return (
        <div>
            {products.map((product: IProduct) => {
                return <div>{product.name}</div>;
            })}
        </div>
    );
};

export default ProductsList;
