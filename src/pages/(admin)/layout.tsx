import React from "react";

import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { HeaderAdmin, Sidebar } from "./_components";

const { Content, Footer } = Layout;

const LayoutAdmin: React.FC = () => {
    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Sidebar />
                <Layout>
                    <HeaderAdmin />
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};

export default LayoutAdmin;
