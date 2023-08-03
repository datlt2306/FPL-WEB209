import { useGetProductsQuery, useRemoveProductMutation } from "@/api/product";
import { IProduct } from "@/interfaces/product";
import { Button, Table, Popconfirm, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AdminProduct = () => {
    const { data, error, isLoading } = useGetProductsQuery();
    const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation();
    const dataSource = data?.map(({ id, name, price }: IProduct) => ({
        key: id,
        name,
        price,
    }));
    const confirm = (id: number | string) => {
        removeProduct(id);
    };
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            render: ({ key: id }: { key: number | string }) => (
                <div className="flex space-x-2">
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>
                            {isRemoveLoading ? (
                                <AiOutlineLoading3Quarters className="animate-spin" />
                            ) : (
                                "Xóa"
                            )}
                        </Button>
                    </Popconfirm>
                    <Button type="primary" danger>
                        <Link to={`/admin/product/${id}/edit`}>Sửa</Link>
                    </Button>
                </div>
            ),
        },
    ];
    if (isLoading) return <Skeleton />;
    if (error) {
        if ("data" in error && "status" in error) {
            return (
                <div>
                    {error.status} - {JSON.stringify(data)}
                </div>
            );
        } else {
            return <div>{JSON.stringify(error)}</div>;
        }
    }
    return (
        <div>
            <header className="flex justify-between items-center mb-4">
                <h2 className="text-2xl">Quản lý sản phẩm</h2>
                <Button type="primary" danger>
                    <Link to="/admin/product/add">Thêm sản phẩm</Link>
                </Button>
            </header>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default AdminProduct;
