import { IProduct } from "../interfaces/Product";
import { useGetProductsQuery } from "../services/product";

type Props = {};

const Product = (props: Props) => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return <div>{products!.map((item: IProduct) => item.name)}</div>;
};

export default Product;
