// import React, { useEffect, useState } from "react";
// import { IProduct } from "../../types/product";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
import { Breadcrumb, Layout, Menu, Table } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import axios from "axios";

const ProductList = () => {
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];
    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/products`);
            return response.data.map((product: any) => {
                return {
                    key: product.id,
                    name: product.name,
                    age: product.price,
                    address: product.description,
                };
            });
        },
    });
    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>{error.message}</div>;
    return (
        // <div>
        //     <ul>
        //         {data.map((item: IProduct) => (
        //             <li key={item?.id}>
        //                 {item?.name} - {item?.price}
        //             </li>
        //         ))}
        //     </ul>
        // </div>

        <Layout>
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={[
                        { key: "1", label: "nav 1" },
                        { key: "2", label: "nav 2" },
                        { key: "3", label: "nav 2" },
                    ]}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <div
                style={{
                    padding: "0 48px",
                }}
            >
                <Breadcrumb
                    style={{
                        margin: "16px 0",
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{
                        padding: "24px 0",
                    }}
                >
                    <Sider width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{
                                height: "100%",
                            }}
                            items={[
                                { key: "1", label: "nav 1" },
                                { key: "2", label: "nav 2" },
                                { key: "3", label: "nav 2" },
                            ]}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: "0 24px",
                            minHeight: 280,
                        }}
                    >
                        <Table dataSource={data} columns={columns} />;
                    </Content>
                </Layout>
            </div>
            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default ProductList;
