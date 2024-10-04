import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";

const Signin = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate, isPending } = useMutation({
        mutationFn: async (formData) => {
            return await axios.post(`http://localhost:3000/api/login`, formData);
        },
        onSuccess: () => {
            form.resetFields();
            messageApi.open({
                type: "success",
                content: "Đăng nhập thành công!",
            });
        },
    });

    const onFinish = (values) => {
        mutate(values);
    };
    return (
        <div>
            {contextHolder}
            <Form
                className="mx-auto"
                name="basic"
                form={form}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                disabled={isPending}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Bắt buộc nhập",
                        },
                        {
                            type: "email",
                            min: 3,
                            message: "Định dạng email không đúng",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Mật khẩu" name="password">
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Signin;
