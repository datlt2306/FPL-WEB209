import { Loader2, Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { productApi } from "../services/productApi";
import axios from "axios";
import { ProductFormData } from "../../types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCreate from "../../hooks/useCreate";
import { Button, Form, Input, InputNumber, Radio, Select } from "antd";
import { useNavigate } from "react-router-dom";
// import { createProduct } from "../../api/product";
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};
export const ProductForm = () => {
    const navigate = useNavigate();
    const { mutate } = useCreate({ resource: "products" });

    const onFinish = (formData: any) => {
        mutate(formData, {
            onSuccess: () => {
                alert("Thêm sản phẩm thành công");
                navigate("/admin/products");
            },
        });
    };
    return (
        <Form {...formItemLayout} onFinish={onFinish}>
            <Form.Item label="Tên sản phẩm" name="name">
                <Input />
            </Form.Item>
            <Form.Item label="Giá sản phẩm" name="price">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Danh mục" name="category">
                <Select>
                    <Select.Option value="1">Danh mục 1</Select.Option>
                    <Select.Option value="2">Danh mục 2</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Mô tả" name="description">
                <Input.TextArea rows={5} />
            </Form.Item>
            <Form.Item label="Trạng Thái" name="status">
                <Radio.Group>
                    <Radio value={true}> Còn hàng</Radio>
                    <Radio value={false}>Hết hàng </Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
export default ProductForm;
