import { useQuery } from "@tanstack/react-query";
import { Skeleton, Table } from "antd";
import axios from "axios";

const ProductsAdminPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/products`);
            return response.data.map((product) => ({
                key: product.id,
                ...product,
            }));
        },
    });
    const columns = [
        {
            title: "Tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Danh mục",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Tình trạng",
            dataIndex: "available",
            key: "available",
        },
        {
            title: "Loại hàng",
            dataIndex: "reuse",
            key: "reuse",
        },
    ];
    return (
        <div>
            <h1 className="text-3xl mb-5">Quản lý sản phẩm</h1>
            <Skeleton loading={isLoading} active>
                <Table dataSource={data} columns={columns} />
            </Skeleton>
        </div>
    );
};

export default ProductsAdminPage;
