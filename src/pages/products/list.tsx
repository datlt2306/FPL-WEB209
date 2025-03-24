import { Button, message, Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";
import useList from "../../hooks/useList";
import useDelete from "../../hooks/useDelete";

const ProductList = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading, isError, error } = useList({ resource: "products" });
    const { mutate } = useDelete({ resource: "products" });

    const dataSource = data?.data?.map((item: any) => ({
        key: item.id,
        ...item,
    }));
    const columns = [
        { title: "Tên sản phẩm", dataIndex: "name", key: "name" },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
            render: (price: number) => {
                return <strong>{price}</strong>;
            },
        },
        { title: "Mô tả", dataIndex: "description", key: "description" },
        {
            dataIndex: "action",
            render: (_: any, item: any) => {
                return (
                    <div className="flex space-x-2">
                        <Popconfirm
                            title="Bạn có chắc chắn muốn xóa không?"
                            onConfirm={() => {
                                mutate(item.id, {
                                    onSuccess: () => messageApi.success("Xóa thành công"),
                                    onError: (error: any) => console.log(error?.response?.data),
                                });
                            }}
                        >
                            <Button type="primary" danger>
                                Xóa
                            </Button>
                        </Popconfirm>
                        <Button type="primary">
                            <Link to={`/admin/products/edit/${item.id}`}>Cập nhật</Link>
                        </Button>
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
            {contextHolder}
        </div>
    );
};

export default ProductList;

// client state
// server state
