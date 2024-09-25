import React from "react";
import { Button, Image, Skeleton, Space, Table, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
//  "name": "2131 update 4 5 11111",
//       "category": "2",
//       "price": "11111",
//       "imageUrl": "11111",
//       "description": "1111",
//       "available": false,
//       "id": 1,
//       "status": "reuse"
const columns = [
    {
        title: "Ảnh",
        dataIndex: "imageUrl",
        key: "imageUrl",
        render: (_, item) => {
            return <Image width={50} src={item.imageUrl} />;
        },
    },
    {
        title: "Tên sản phẩm",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Danh mục",
        dataIndex: "category",
        key: "category",
    },

    {
        title: "Giá",
        key: "price",
        dataIndex: "price",
    },
    {
        title: "Tình trạng",
        dataIndex: "available",
        key: "available",
        render: (_, item) => {
            return <span>{item.available ? "Còn hàng" : "Hết hàng"}</span>;
        },
    },
    {
        title: "Loại hàng",
        key: "type",
        dataIndex: "type",
        render: (_, item) => {
            return <span>{item.status ? "Đã qua sử dụng" : "Mới"}</span>;
        },
    },
    {
        key: "action",
        render: () => (
            <>
                <Space width="150">
                    <Button variant="solid" color="danger">
                        Xóa
                    </Button>
                    <Button variant="solid" color="primary">
                        Cập nhật
                    </Button>
                </Space>
            </>
        ),
    },
];

const AdminProductsPage = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/products`);
            return response.data.map((product) => ({
                key: product.id,
                ...product,
            }));
        },
    });
    return (
        <>
            <h1 className="text-3xl mb-5">Quản lý sản phẩm</h1>
            {isLoading ? <Skeleton active /> : <Table columns={columns} dataSource={data} />}
        </>
    );
};
export default AdminProductsPage;

// { ProductList.map(item => {
//     console.log(item)
// })}
