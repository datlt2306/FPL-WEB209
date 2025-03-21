import { Link } from "react-router-dom";
import useList from "../../hooks/useList";
import { useState } from "react";
import { Button, Drawer } from "antd";
import ProductDrawer from "../../components/ProductDrawer";
import { useQuery } from "@tanstack/react-query";
import { getList } from "../../provider/dataProvider";

const ProductList = () => {
    const [open, setOpen] = useState(false);

    const { data, isLoading, error } = useList({ resource: "products" });

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error?.message}</div>;
    return (
        <div>
            <h1>Product List</h1>

            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <ProductDrawer onClose={onClose} open={open} />
            <Link to="/products/add">Add Product</Link>
            {data?.data?.map((item: any, index: number) => (
                <li key={item?.id}>
                    <span>{item?.name}</span>
                </li>
            ))}
        </div>
    );
};

export default ProductList;
// viết call API = hiển thị danh sách,thêm
// viết 1 hook = useList, useCreate
// viết 1 component = ProductDrawer

// client state
// server state
