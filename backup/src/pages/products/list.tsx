import { Button, message, Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";
import useDelete from "../../hooks/useDelete";
import useList from "../../hooks/useList";
import Counter from "../../components/Counter";

const ProductList = () => {
    console.log("123");
    const { data, isLoading, error } = useList({ resource: "products" });
    const { mutate } = useDelete({ resource: "products" });
    const [messageApi, contextHolder] = message.useMessage();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error?.message}</div>;

    const dataSource = data?.data.map((item: any) => ({
        key: item.id,
        ...item,
    }));

    const columns = [
        { key: "name", dataIndex: "name", title: "Tên sản phẩm" },
        {
            key: "price",
            dataIndex: "price",
            title: "Giá sản phẩm",
            render: (price: number) => {
                return (
                    <>
                        <strong>{price}</strong>
                    </>
                );
            },
        },
        {
            dataIndex: "action",
            render: (_: any, item: any) => {
                return (
                    <div className="flex space-x-3">
                        <Button type="primary" size="small">
                            <Link to={`/admin/products/edit/${item.id}`}>Edit</Link>
                        </Button>
                        <Popconfirm
                            title="Bạn có chắc chắn muốn xóa không?"
                            onConfirm={() => {
                                mutate(item.id, {
                                    onSuccess: () => message.success("Xóa thành công"),
                                    onError: (error) => message.error(error?.message),
                                });
                            }}
                        >
                            <Button type="primary" danger size="small">
                                Xóa
                            </Button>
                        </Popconfirm>
                    </div>
                );
            },
        },
    ];
    return (
        <div>
            <Counter />
            <div className="flex justify-between items-center py-5">
                <h1 className="font-semibold text-xl">Product List</h1>
                <Button type="primary">
                    <Link to="/admin/products/add">Add Product</Link>
                </Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />
            {contextHolder}
        </div>
    );
};

export default ProductList;
// viết call API = hiển thị danh sách,thêm
// viết 1 hook = useList, useCreate
// viết 1 component = ProductDrawer

// client state
// server state
