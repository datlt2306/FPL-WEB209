import { Button, Table } from "antd";
import { useState } from "react";
import ProductDrawer from "../../components/ProductDrawer";
import useList from "../../hooks/useList";

const ProductList = () => {
    const { data, isLoading, isError, error } = useList({ resource: "products" });
    const [open, setOpen] = useState(false);

    // nhận giá trị từ server sau đó chuyển đổi thành dạng mảng dataSource
    // khai báo dữ liệu
    const dataSource = data?.data?.map((item: any) => ({ key: item.id, ...item }));
    // khai báo cột
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
                        <Button type="primary" onClick={showDrawer}>
                            Cập nhật
                        </Button>
                    </div>
                );
            },
        },
    ];

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    if (isLoading) return <div>Loading....</div>;
    if (isError) return <div>Error: {error.message}</div>;
    if (!data) return <div>Không có sản phẩm</div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Sản phẩm</h1>
                <Button type="primary" onClick={showDrawer}>
                    Thêm sản phẩm
                </Button>
            </div>

            <Table dataSource={dataSource} columns={columns} />
            <ProductDrawer onClose={onClose} open={open} />
        </div>
    );
};

export default ProductList;

// client state
// server state
