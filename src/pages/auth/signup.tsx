import { useSignupMutation } from "@/api/auth";
import { Button, Form, Input } from "antd";

const Signup = () => {
    const [signup, { error }] = useSignupMutation();
    const onFinish = async (values: any) => {
        await signup({
            name: values.name,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
        });
    };

    type FieldType = {
        name?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
    };
    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Tên không được để trống!" }]}
                >
                    <Input />
                </Form.Item>

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

                <Form.Item<FieldType>
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                        { required: true, message: "Confirm password is required" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject(
                                        new Error("Confirm password does not match")
                                    );
                                }
                            },
                        }),
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
        </>
    );
};

export default Signup;
