import instance from "@/configs/axios";
import { BackwardFilled, Loading3QuartersOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useParams } from "react-router-dom";

type FieldType = {
    name?: string;
    price?: number;
    description?: string;
};

const ProductEditPage = () => {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            try {
                return await instance.get(`/products/${id}`);
            } catch (error) {
                throw new Error(`Lấy sản phẩm thất bại`);
            }
        },
    });

    const { mutate, isPending } = useMutation({
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
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;

    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Cập nhật: {data?.data?.name}</h1>
                <Button type="primary">
                    <Link to={`/admin/products`}>
                        <BackwardFilled /> Quay lại
                    </Link>
                </Button>
            </div>
            <div className="max-w-4xl mx-auto">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ ...data?.data }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    // autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Tên sản phẩm bắt buộc phải có!" }]}
                    >
                        <Input disabled={isPending} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[{ required: true, message: "Giá sản phẩm bắt buộc phải có!" }]}
                    >
                        <Input disabled={isPending} />
                    </Form.Item>
                    <Form.Item<FieldType> label="Mô tả sản phẩm" name="description">
                        <TextArea rows={4} disabled={isPending} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" disabled={isPending}>
                            {isPending ? (
                                <>
                                    <Loading3QuartersOutlined className="animate-spin mr-2" />
                                    Submit
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ProductEditPage;

// Lấy id trên url
// Sử dụng id để call api lấy dữ liệu sản phẩm
// Hiển thị dữ liệu lên form
// cập nhật sản phẩm
// thông báo thành công
// hoặc thông báo lỗi
// Quay lại trang danh sách sản phẩm
// ...
