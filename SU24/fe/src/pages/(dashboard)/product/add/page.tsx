import { IProduct } from "@/common/types/product";
import { addProduct } from "@/services/product";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";

const ProductAddPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate } = useMutation({
        mutationFn: async (product: IProduct) => {
            try {
                const response = await addProduct(product);
                return response;
            } catch (error) {
                throw error;
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Thêm sản phẩm thành công",
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
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
                onFinish={(formData) => mutate(formData)}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Tên sản phẩm không được để trống",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Thêm sản phẩm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ProductAddPage;
