import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import useList from "../../hooks/useList";

const ProductList = () => {
    const { data, isLoading, isError, error } = useList({ resource: "products" });

    const dataSource = data?.data?.map((item: any) => ({
        key: item.id,
        ...item,
    }));
    const columns = [
        { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
        { title: "Giá", dataIndex: "price", key: "price" },
        { title: "Mô tả", dataIndex: "description", key: "description" },
        {
            dataIndex: "action",
            render: () => {
                return (
                    <div className="flex space-x-2">
                        <Button type="primary" danger>
                            Xóa
                        </Button>
                        <Button type="primary">Cập nhật</Button>
                    </div>
                );
            },
        },
    ];
    if (isLoading) return <div>Loading....</div>;
    if (isError) return <div>Error: {error.message}</div>;
    if (!data) return <div>Không có sản phẩm</div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Sản phẩm</h1>
                <Link type="primary" to="/admin/products/add">
                    Thêm sản phẩm
                </Link>
            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default ProductList;

// client state
// server state
