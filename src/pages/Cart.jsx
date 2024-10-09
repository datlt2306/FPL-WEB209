import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Table } from "antd";
import axios from "axios";
import React, { useState } from "react";

const AddToCartDemo = () => {
    const userId = JSON.parse(localStorage.getItem("userId") || null);
    const { data: cartData, isLoading } = useQuery({
        queryKey: ["cart", userId],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/carts/${userId}`);
            return response.data;
        },
        enabled: !!userId,
    });

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
