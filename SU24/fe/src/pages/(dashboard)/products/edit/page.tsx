import instance from "@/configs/axios";
import { BackwardFilled, Loading3QuartersOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    Button,
    Checkbox,
    Form,
    FormProps,
    Input,
    InputNumber,
    message,
    Select,
    Skeleton,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useParams } from "react-router-dom";
type FieldType = {
    name: string;
    category: string;
    price: number;
    image?: string;
    gallery?: string[];
    description?: string;
    discount?: number;
    countInStock?: number;
    featured?: boolean;
    tags?: string[];
    attributes?: string[];
};

const ProductEditPage = () => {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ["product", id],
        queryFn: () => instance.get(`/products/${id}`),
    });
    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: () => instance.get(`/categories`),
    });
    const { mutate, isPending } = useMutation({
        mutationFn: async (product: FieldType) => {
            try {
                return await instance.put(`/products/${id}`, product);
            } catch (error) {
                throw new Error(`Call api thất bại. Vui lòng thử lại sau!`);
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
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Cập nhật: {data?.data?.name}</h1>
                <Button type="primary">
                    <Link to="/admin/products">
                        <BackwardFilled /> Quay lại
                    </Link>
                </Button>
            </div>
            <div className="max-w-2xl mx-auto">
                <Skeleton loading={isLoading}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        autoComplete="off"
                        initialValues={data?.data}
                    >
                        <Form.Item<FieldType>
                            label="Tên sản phẩm"
                            name="name"
                            rules={[
                                { required: true, message: "Tên sản phẩm bắt buộc phải nhập!" },
                            ]}
                        >
                            <Input disabled={isPending} />
                        </Form.Item>
                        <Form.Item<FieldType> label="Danh mục" name="category">
                            <Select
                                options={categories?.data?.map(
                                    (category: { _id: number | string; name: string }) => ({
                                        value: category._id,
                                        label: category.name,
                                    })
                                )}
                            />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Giá sản phẩm"
                            name="price"
                            rules={[
                                { required: true, message: "Tên sản phẩm bắt buộc phải nhập!" },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType> label="Ảnh sản phẩm" name="image">
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType> label="Gallery ảnh" name="gallery">
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType> label="Mô tả sản phẩm" name="description">
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item<FieldType> label="Giá khuyến mại" name="discount">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item<FieldType> label="Số lượng sản phẩm" name="countInStock">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Sản phẩm nổi bật"
                            name="featured"
                            valuePropName="checked"
                        >
                            <Checkbox />
                        </Form.Item>
                        <Form.Item<FieldType> label="Tags" name="tags">
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType> label="Thuộc tính" name="attributes">
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                {isPending ? (
                                    <>
                                        <Loading3QuartersOutlined className="animate-spin" /> Submit
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </Form.Item>
                    </Form>
                </Skeleton>
            </div>
        </div>
    );
};

export default ProductEditPage;
