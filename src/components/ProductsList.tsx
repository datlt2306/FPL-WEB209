import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IProduct } from "../interfaces/Product";
import { RootState } from "../reducers[draft]";
import { addProduct, fetchProducts } from "../slice/product";
const ProductsList = () => {
    const { value: products, isLoading } = useSelector((state: RootState) => state.product);
    const dispatch: Dispatch<any> = useDispatch();

    // Khai báo state lưu giá trị form
    const [value, setValue] = useState({});

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    if (isLoading) return <div>Loading...</div>;

    // Sự kiện onChange để lấy giá trị input và setState
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    // Sự kiện submit để dispatch actions trong productSlice
    const onHanleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addProduct(value));
    };
    return (
        <div>
            {products.map((product: IProduct) => {
                return <div key={product.id}>{product.name}</div>;
            })}
            <form onSubmit={onHanleSubmit}>
                <input type="text" name="name" onChange={onHandleChange} />
                <input type="number" name="price" onChange={onHandleChange} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductsList;
