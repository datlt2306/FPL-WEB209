import { Button, Form, Input, InputNumber, message, Radio, Select } from "antd";
import useCreate from "../../hooks/useCreate";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

export function SignupPage() {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { mutate } = useSignup({ resource: "signup" });
    const onFinish = (formData: any) => {
        const newObject = {
            email: formData.email,
            password: formData.password,
        };
        mutate(newObject as any, {
            onSuccess: () => {
                messageApi.success("Thêm sản phẩm thành công");
                setTimeout(() => {
                    navigate("/signin");
                }, 1000);
            },
            onError: (error: any) => {
                messageApi.error(error?.response?.data);
            },
        });
    };

    return (
        <div className="max-w-screen-md mx-auto">
            <div className="flex justify-between items-center py-5 ">
                <h1 className="font-semibold text-xl">Đăng ký</h1>
            </div>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                        { type: "email", message: "Email invalid" },
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
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("The new password that you entered do not match!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
            {contextHolder}
        </div>
    );
}
export default SignupPage;

// DataProvider
// hooks
// view
// App.tsx để thêm router
