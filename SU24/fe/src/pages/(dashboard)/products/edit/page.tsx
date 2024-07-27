import { Button, Checkbox, FormProps, Input, InputNumber, message } from "antd";
import { AiFillBackward } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "@/configs/axios";

type FieldType = {
    name: string;
    price: number;
    discount: number;
    description: string;
    featured: boolean;
    countInStock: number;
};
const ProductEditPage = () => {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => instance.get(`/products/${id}`),
    });
    const { mutate } = useMutation({
        mutationFn: async (formData: FieldType) => {
            try {
                return await instance.put(`/products/${id}`, formData);
            } catch (error) {
                throw new Error((error as any).message);
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Cập nhật sản phẩm thành công!",
            });
            queryClient.invalidateQueries({
                queryKey: ["product"],
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        mutate(values);
    };
    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="container mx-auto">
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl">Cập nhật sản phẩm</h1>
                <Link to="/admin/products">
                    <Button type="primary">
                        <AiFillBackward /> Quay lại
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-[auto,300px]">
                <div>
                    <Form
                        form={form}
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{ ...data?.data }}
                    >
                        <Form.Item<FieldType>
                            label="Tên sản phẩm"
                            name="name"
                            rules={[{ required: true, message: "Tên sản phẩm bắt buộc nhập!" }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Giá sản phẩm"
                            name="price"
                            rules={[
                                { required: true, message: "Giá sản phẩm bắt buộc nhập!" },
                                { type: "number", min: 0, message: "Giá sản phẩm phải lớn hơn 0" },
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Giá khuyến mãi"
                            name="discount"
                            rules={[
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || value < getFieldValue("price")) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error("Giá khuyến mãi phải nhỏ hơn giá sản phẩm!")
                                        );
                                    },
                                }),
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item<FieldType> label="Mô tả sản phẩm" name="description">
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item<FieldType> name="featured" valuePropName="checked">
                            <Checkbox>Sản phẩm nổi bật</Checkbox>
                        </Form.Item>
                        <Form.Item<FieldType> label="Sản phẩm trong kho" name="countInStock">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div>sidebar</div>
            </div>
        </div>
    );
};

export default ProductEditPage;

// npm uninstall @ant-design/cssinjs
