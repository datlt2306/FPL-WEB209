import { useSigninMutation } from "@/api/auth";
import { Button, Form, Input, message } from "antd";

const Signin = () => {
    const [signin, { error }] = useSigninMutation();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values: any) => {
        await signin({
            email: values.email,
            password: values.password,
        });
    };

    type FieldType = {
        email?: string;
        password?: string;
    };
    if (error) {
        if ("data" in error) {
            messageApi.open({
                type: "error",
                content: error?.data?.message,
            });
        }
    }
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            {contextHolder}
            <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Invalid email format" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                    { required: true, message: "Password is required" },
                    { min: 6, message: "Password must be at least 6 characters" },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Signin;
