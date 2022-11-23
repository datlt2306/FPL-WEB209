import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../apiSlice/product";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { fetchProducts } from "../slice/product";
import { Space, Table, Button, Popconfirm, message } from "antd";
import { getProduct } from "../api/product";
const { Column } = Table;

const Product = () => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();

    const getData = () => {
        return products.map((product) => ({
            key: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
        }));
    };

    const confirm = (id: number) => {
        console.log(id);
        message.info("Clicked on Yes.");
    };
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
        <div>
            <Link type="primary" to="/admin/products/add">
                Add
            </Link>
            <Table dataSource={getData()}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Quantity" dataIndex="quantity" key="quantity" />
                <Column
                    title="Action"
                    key="action"
                    render={(product) => {
                        return (
                            <Space size="middle">
                                <Popconfirm
                                    title="Mày có muốn xóa không?"
                                    placement="top"
                                    onConfirm={() => confirm(product.key)}
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
