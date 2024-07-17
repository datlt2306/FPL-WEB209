import Sider from "antd/es/layout/Sider";
import Navbar from "./Navbar";
import { useState } from "react";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Navbar />
        </Sider>
    );
};

export default Sidebar;
