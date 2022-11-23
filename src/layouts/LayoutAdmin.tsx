import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { DashboardOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

type Props = {};

const LayoutAdmin = (props: Props) => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Header className="header">
                <div className="logo" />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu style={{ height: "100%" }}>
                        <Menu.Item>
                            <NavLink to="/admin">
                                <DashboardOutlined /> Thống kê
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to="/admin/products">
                                <NotificationOutlined /> Sản phẩm
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to="/admin/users">
                                <UserOutlined /> Người dùng
                            </NavLink>
                        </Menu.Item>
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
