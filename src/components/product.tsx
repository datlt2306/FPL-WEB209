import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../apiSlice/product";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { fetchProducts } from "../slice/product";
import { Space, Table, Button, Popconfirm, message } from "antd";
const { Column } = Table;
type Props = {};
const dataSource = [
    {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street",
    },
    {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street",
    },
];
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
    },
];

// "id": 1,
//       "name": "Product 1",
//       "price": 100,
//       "quantity": 1

const Product = (props: Props) => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();
    // const dispatch = useAppDispatch();
    // const products = useAppSelector((state) => state.products.value);
    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, []
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error</div>;

    const getData = () => {
        return products.map((product) => ({
            key: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
        }));
    };

    const confirm = () => {
        message.info("Clicked on Yes.");
    };
    return (
        <div>
            <Link type="primary" to="/admin/products/add">
                Add
            </Link>
            {/* {products!.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))} */}
            <Table dataSource={getData()}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Quantity" dataIndex="quantity" key="quantity" />
                <Column
                    title="Action"
                    key="action"
                    render={() => {
                        return (
                            <Space size="middle">
                                <Popconfirm
                                    title="Mày có muốn xóa không?"
                                    placement="top"
                                    onConfirm={confirm}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button type="primary" danger>
                                        Delete
                                    </Button>
                                </Popconfirm>
                            </Space>
                        );
                    }}
                ></Column>
            </Table>
            ;
        </div>
    );
};

export default Product;
