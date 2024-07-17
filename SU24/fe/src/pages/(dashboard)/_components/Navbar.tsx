import { Menu } from "antd";

const Navbar = () => {
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
                {
                    key: "1",
                    label: "nav 1",
                },
                {
                    key: "2",
                    label: "nav 2",
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
