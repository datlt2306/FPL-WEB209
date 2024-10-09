import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
const { TextArea } = Input;

const Signin = () => {
    // const navigate = useNavigate();
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate } = useMutation({
        mutationFn: async (formData) => {
            return await axios.post(`http://localhost:3000/signin`, formData);
        },
        onSuccess: ({ data }) => {
            messageApi.success("Đăng nhập thành công");

            localStorage.setItem("userId", JSON.stringify(data.user.id));
            // navigate("/");
        },
    });

    const onFinish = (values) => {
        mutate(values);
    };

    return (
        <div>
            {contextHolder}
            <Form
                form={form}
                className="mx-auto"
                name="basic"
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
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Bắt buộc nhập email" },
                        {
                            type: "email",
                            message: "Email không đúng định dạng",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Bắt buộc nhập password" }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Signin;
