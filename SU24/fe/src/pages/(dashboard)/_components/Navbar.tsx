import { Menu } from "antd";
import { IconMap } from "antd/es/result";
import { User2Icon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
                {
                    key: "1",
                    label: <NavLink to="/admin">Thống kê</NavLink>,
                },
                {
                    key: "2",
                    label: "Sản phẩm",
                    children: [
                        {
                            key: "2.1",
                            label: (
                                <NavLink to="/admin/products">
                                    Danh sách
                                </NavLink>
                            ),
                        },
                        {
                            key: "2.2",
                            label: (
                                <NavLink to="/admin/products/add">
                                    Thêm mới
                                </NavLink>
                            ),
                        },
                        {
                            key: "2.3",
                            label: (
                                <NavLink to="/admin/products/add">
                                    Danh mục
                                </NavLink>
                            ),
                        },
                    ],
                },
                {
                    key: "3",
                    label: "nav 3",
                },
            ]}
        />
    );
};

export default Navbar;
