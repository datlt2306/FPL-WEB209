import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import MenuAdmin from "../components/MenuAdmin";
import MenuAdminTop from "../components/MenuAdminTop";

const { Header, Content, Sider } = Layout;

const LayoutAdmin = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Header className="header">
                <div className="logo" />
                <MenuAdminTop />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <MenuAdmin />
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
