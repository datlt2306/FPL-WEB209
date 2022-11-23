import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/product";
import { Button, Table, Popconfirm, message } from "antd";
import Column from "antd/es/table/Column";

type Props = {};

const Product = () => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    const removeItem = (id: number) => {
        console.log("id", id);
        message.info("Anh đúng đẹp trai");
    };
    return (
        <>
            <Button type="primary">Add</Button>
            {/* {products.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))} */}

            <Table
                dataSource={products.map((item) => ({
                    key: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                }))}
            >
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Quantity" dataIndex="quantity" key="quantity" />
                <Column
                    title="Action"
                    key="action"
                    render={(product) => {
                        console.log("product", product);
                        return (
                            <Popconfirm
                                placement="top"
                                title="Mày có muốn xóa không?"
                                onConfirm={() => removeItem(product.key)}
                                okText="Có"
                                cancelText="Không"
                            >
                                <Button type="primary" danger>
                                    Remove
                                </Button>
                            </Popconfirm>
                        );
                    }}
                ></Column>
            </Table>
        </>
    );
};

export default Product;
