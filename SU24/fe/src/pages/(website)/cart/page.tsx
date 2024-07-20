import { Button, InputNumber, message, Table } from "antd";
import useCart from "@/common/hooks/useCart"; // Đảm bảo đường dẫn đến hook useCart đúng

const CartPage = () => {
    const userId = "yourUserId"; // Thay thế bằng ID người dùng thực tế
    const { cart, isLoading, error, updateQuantity, removeItem } = useCart(userId);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleQuantityChange = (productId, value) => {
        if (!value || value < 1) {
            message.error("Invalid quantity");
            return;
        }
        updateQuantity.mutate(
            { productId, quantity: value },
            {
                onSuccess: () => {
                    message.success("Quantity updated successfully");
                },
                onError: (err) => {
                    message.error(`Error updating quantity: ${err.message}`);
                },
            }
        );
    };

    const handleRemove = (productId) => {
        removeItem.mutate(productId, {
            onSuccess: () => {
                message.success("Item removed successfully");
            },
            onError: (err) => {
                message.error(`Error removing item: ${err.message}`);
            },
        });
    };

    const columns = [
        {
            title: "Product Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (text, record) => (
                <InputNumber
                    min={1}
                    defaultValue={Number(text)}
                    onChange={(value) => handleQuantityChange(record.key, value)}
                />
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => <Button onClick={() => handleRemove(record.key)}>Remove</Button>,
        },
    ];

    return (
        <div>
            <h2>Your Cart</h2>
            <Table dataSource={cart?.items || []} columns={columns} rowKey="key" />
        </div>
    );
};

export default CartPage;
