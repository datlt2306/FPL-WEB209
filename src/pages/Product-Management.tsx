import { useGetProductsQuery, useRemoveProductMutation } from "@/api/product";
import { Button, Skeleton, Table } from "antd";
import { Link } from "react-router-dom";

const ProductManagement = () => {
    const { data, error, isLoading } = useGetProductsQuery();
    const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation();
    if (isLoading) return <Skeleton />;
    if (error) return <div>Error</div>;
    const dataSource = data?.map(({ id, name, price }) => {
        return {
            key: id,
            name,
            price,
        };
    });
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
            title: "Action",
            key: "action",
            render: ({ key: id }: any) => {
                return (
                    <>
                        <Button onClick={() => removeProduct(id)}>Delete</Button>
                        <Button type="primary" danger className="ml-2">
                            <Link to={`/admin/product/${id}/edit`}>Edit</Link>
                        </Button>
                    </>
                );
            },
        },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="mb-3">Quản lý Sản phẩm</h2>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default ProductManagement;
