import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

const ProductEdit = () => {
    const { formProps, saveButtonProps, query, formLoading } = useForm({});
    console.log("formProps", formProps);
    const productData = query?.data?.data;

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
        defaultValue: productData?.category,
        queryOptions: {
            enabled: !!productData?.category,
        },
    });

    return (
        <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label={"Tên sản phẩm"}
                    name={["name"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Mô tả"}
                    name="description"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>
                <Form.Item
                    label={"Category"}
                    name={["category", "id"]}
                    initialValue={formProps?.initialValues?.category?.id}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item>
                <Form.Item
                    label={"Status"}
                    name={["status"]}
                    initialValue={"draft"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        defaultValue={"draft"}
                        options={[
                            { value: "draft", label: "Draft" },
                            { value: "published", label: "Published" },
                            { value: "rejected", label: "Rejected" },
                        ]}
                        style={{ width: 120 }}
                    />
                </Form.Item>
            </Form>
        </Edit>
    );
};

export default ProductEdit;
