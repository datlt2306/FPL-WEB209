import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

const MyBreadcrumb = () => {
    const location = useLocation();
    const pathSnippets = location.pathname
        .split("/")
        .filter((i) => i && i !== "admin");

    const breadcrumbItems = pathSnippets.map((snippet, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{snippet}</Link>
            </Breadcrumb.Item>
        );
    });

    return (
        <Breadcrumb style={{ margin: "16px 0" }}>{breadcrumbItems}</Breadcrumb>
    );
};

export default MyBreadcrumb;
