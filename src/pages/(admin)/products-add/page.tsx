import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, InputNumber, message, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const AdminProductsAddPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate } = useMutation({
        mutationFn: async (formData) => {
            const response = await fetch(`http://localhost:3000/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            return await response.json();
        },
        onSuccess: () => {
            messageApi.success("Thêm sản phẩm thành công");
        },
        onError: (error) => {
            console.log(error.message);
        },
    });
    return (
        <div>
            {contextHolder}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={(values) => mutate(values)}
            >
                <Form.Item label="Tên sản phẩm" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Giá sản phẩm" name="price">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Ảnh sản phẩm" name="imageUrl">
                    <Input />
                </Form.Item>
                <Form.Item label="Mô tả sản phẩm" name="description">
                    <TextArea />
                </Form.Item>
                <Form.Item label="Tình trạng sản phẩm" name="inStock">
                    <Radio.Group>
                        <Radio value={true}>Còn hàng</Radio>
                        <Radio value={false}>Hết hàng</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Danh mục sản phẩm" name="category">
                    <Select>
                        <Select.Option value="Category 1">Category 1</Select.Option>
                        <Select.Option value="Category 2">Category 2</Select.Option>
                        <Select.Option value="Category 3">Category 3</Select.Option>
                        <Select.Option value="Category 4">Category 4</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AdminProductsAddPage;
