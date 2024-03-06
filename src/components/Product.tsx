import { IProduct } from "../interfaces/name";

type ProductProps = {
    item: IProduct;
};

const Product = (props: ProductProps) => {
    return <div>Product {props.item.name}</div>;
};

export default Product;
