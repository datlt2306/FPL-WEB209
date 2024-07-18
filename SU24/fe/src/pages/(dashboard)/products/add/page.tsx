import { Button, Checkbox, FormProps, Input, message } from "antd";
import { AiFillBackward } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useMutation, useQuery } from "@tanstack/react-query";
import instance from "@/configs/axios";

type FieldType = {
    name: string;
    price: number;
    description: string;
    featured: boolean;
    countInStock: number;
};
const ProductAddPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: () => instance.get(`/categories`),
    });
    console.log(categories);
    const { mutate } = useMutation({
        mutationFn: async (formData: FieldType) => {
            try {
                return await instance.post(`/products`, formData);
            } catch (error) {
                throw new Error((error as any).message);
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Thêm sản phẩm thành công!",
            });
            form.resetFields();
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
        mutate(values);
    };
    return (
        <div className="container mx-auto">
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-xl">Thêm sản phẩm</h1>
                <Link to="/admin/products">
                    <Button type="primary">
                        <AiFillBackward /> Quay lại
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-[auto,300px]">
                <div>
                    <Form form={form} name="basic" layout="vertical" onFinish={onFinish}>
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
                            rules={[{ required: true, message: "Giá sản phẩm bắt buộc nhập!" }]}
                        >
                            <Input />
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

export default ProductAddPage;
