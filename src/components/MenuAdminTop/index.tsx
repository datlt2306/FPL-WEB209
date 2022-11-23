import React from "react";
import { Link } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
type Props = {};

const MenuAdminTop = (props: Props) => {
    return (
        <Menu theme="dark" mode="horizontal">
            <Menu.Item>
                <Link to="/admin">
                    <LaptopOutlined /> Thống kê
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/admin/products">
                    <NotificationOutlined />
                    Sản phẩm
                </Link>
            </Menu.Item>
            <Menu.SubMenu title="sub menu">
                <Menu.Item>
                    <Link to="/admin/products/add">
                        <UserOutlined /> Thêm sản phẩm
                    </Link>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
};

export default MenuAdminTop;
