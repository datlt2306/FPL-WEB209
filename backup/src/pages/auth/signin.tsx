import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import useSignin from "../../hooks/useSignin";

export function SigninPage() {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { mutate } = useSignin({ resource: "signin" });
    const onFinish = (formData: any) =>
        mutate(formData, {
            onSuccess: () => {
                messageApi.success("Đăng nhập thành công");
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            },
            onError: (error: any) => {
                messageApi.error(error?.response?.data);
            },
        });
    return (
        <div className="max-w-screen-md mx-auto">
            <div className="flex justify-between items-center py-5 ">
                <h1 className="font-semibold text-xl">Đăng nhập</h1>
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
export default SigninPage;

// DataProvider
// hooks
// view
// App.tsx để thêm router
