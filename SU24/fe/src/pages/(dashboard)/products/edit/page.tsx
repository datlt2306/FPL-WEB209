import instance from "@/configs/axios";
import { BackwardFilled, Loading3QuartersOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Checkbox, Form, FormProps, Input, InputNumber, message, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useParams } from "react-router-dom";

type FieldType = {
    name: string;
    category?: string;
    price: number;

    description?: string;
    discount?: number;
    featured?: boolean;
    countInStock?: number;
};

const ProductEditPage = () => {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const {
        data: product,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            try {
                return await instance.get(`/products/${id}`);
            } catch (error) {
                throw new Error(`Lấy sản phẩm thất bại`);
            }
        },
    });

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: () => instance.get("/categories"),
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
    console.log(categories);
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Cập nhật: {product?.data?.name}</h1>
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
                    onFinish={onFinish}
                    disabled={isPending}
                    initialValues={product?.data}
                >
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Tên sản phẩm bắt buộc phải có!" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType> label="Danh mục" name="category">
                        <Select
                            showSearch
                            placeholder="Chọn danh mục"
                            optionFilterProp="label"
                            options={categories?.data.map((category: any) => ({
                                value: category._id,
                                label: category.name,
                            }))}
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[{ required: true, message: "Giá sản phẩm bắt buộc phải có!" }]}
                    >
                        <InputNumber addonAfter="Vnd" />
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
                        <InputNumber addonAfter="Vnd" />
                    </Form.Item>
                    <Form.Item<FieldType> label="Số lượng" name="countInStock">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item<FieldType> label="Mô tả sản phẩm" name="description">
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Sản phẩm nổi bật"
                        name="featured"
                        valuePropName="checked"
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            {isPending && <Loading3QuartersOutlined spin />}
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ProductEditPage;
