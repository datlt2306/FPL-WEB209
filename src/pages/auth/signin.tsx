import { Loader2, Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { productApi } from "../services/productApi";
import axios from "axios";
import { SigninPageData } from "../../types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCreate from "../../hooks/useCreate";
import { Button, Form, Input, InputNumber, message, Radio, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import useSignin from "../../hooks/useSignin";
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
export const SigninPage = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();
    const { mutate } = useSignin({ resource: "signin" });

    const onFinish = (formData: any) => {
        mutate(formData, {
            onSuccess: () => {
                navigate("/");
                messageApi.success("Đăng nhập thành công");
            },
            onError: (error: any) => messageApi.error(error?.response?.data),
        });
    };
    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Đăng ký</h1>
            </div>
            <Form {...formItemLayout} onFinish={onFinish}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                        { type: "email", message: "Email Invalid!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
            {contextHolder}
        </div>
    );
};
export default SigninPage;
