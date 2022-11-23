import React from "react";

import { Link, Outlet } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

const LayoutAdmin = () => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item>
                        <Link to="/admin">Thống kê</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/admin/products">Sản phẩm</Link>
                    </Menu.Item>
                    <Menu.SubMenu title="sub menu">
                        <Menu.Item>
                            <Link to="/admin/products/add">Thêm sản phẩm</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu>
                        <Menu.Item>
                            <Link to="/admin">Thống kê</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/admin/products">Sản phẩm</Link>
                        </Menu.Item>
                        <Menu.SubMenu title="sub menu">
                            <Menu.Item>
                                <Link to="/admin/products/add">Thêm sản phẩm</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default LayoutAdmin;
