import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Table, InputNumber } from "antd";

const AddToCartDemo = () => {
    const userId = JSON.parse(localStorage.getItem("userId") || null);
    const queryClient = useQueryClient();
    const { data: cartData, isLoading } = useQuery({
        queryKey: ["cart", userId],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/carts/${userId}`);
            return response.data;
        },
        enabled: !!userId,
    });

    const updateQuantityMutation = useMutation({
        mutationFn: async ({ productId, quantity }) => {
            const response = await axios.put(`http://localhost:3000/carts/${userId}/${productId}`, {
                quantity,
            });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["cart", userId]);
        },
    });

    const handleQuantityChange = (productId, newQuantity) => {
        updateQuantityMutation.mutate({ productId, quantity: newQuantity });
    };

    const columns = [
        {
            title: "Product Name",
            dataIndex: ["product", "name"],
            key: "name",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (text, record) => (
                <InputNumber
                    min={1}
                    value={record.quantity}
                    onChange={(value) => handleQuantityChange(record.productId, value)}
                />
            ),
        },
    ];

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Table columns={columns} dataSource={cartData?.products} rowKey="productId" />
        </div>
    );
};

export default AddToCartDemo;
