import instance from "@/configs/axios";
import { BackwardFilled } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useParams } from "react-router-dom";

type FieldType = {
    name?: string;
    price?: string;
    description?: string;
};

const ProductEditPage = () => {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();

    const { data, isError, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            try {
                return await instance.get(`/products/${id}`);
            } catch (error) {
                throw new Error(`Lấy sản phẩm thất bại`);
            }
        },
    });
    const { mutate } = useMutation({
        mutationFn: async (product: FieldType) => {
            try {
                return await instance.put(`/products/${id}`, product);
            } catch (error) {
                throw new Error(`Cập nhật sản phẩm thất bại`);
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Cập nhật sản phẩm thành công",
            });
            queryClient.invalidateQueries({
                queryKey: ["product"],
            });
        },
        onError(error) {
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
    if (isError) return <div>Đã có lỗi xảy ra</div>;
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="font-semibold text-2xl">Cập nhật: {data?.data?.name}</h1>
                <Button type="primary">
                    <Link to="/admin/products">
                        <BackwardFilled /> Quay lại
                    </Link>
                </Button>
            </div>
            <div className="max-w-3xl mx-auto">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    initialValues={{ ...data?.data }}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Tên sản phẩm bắt buộc phải điền" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[{ required: true, message: "Giá sản phẩm bắt buộc phải điền" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType> label="Mô tả" name="description">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ProductEditPage;
