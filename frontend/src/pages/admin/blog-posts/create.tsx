import { Create, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

export const BlogPostCreate = () => {
    const { formProps, saveButtonProps, mutate } = useForm({});
    const [fileList, setFileList] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const { selectProps: categorySelectProps } = useSelect({
        resource: "categories",
    });

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const handleFileChange = ({ fileList: newFileList }) => {
        console.log(newFileList);
        // setFileList(newFileList);
    };

    const uploadFiles = async () => {
        try {
            setSubmitting(true);
            const uploadPromises = fileList.map((file) => {
                const formData = new FormData();
                formData.append("file", file.originFileObj);
                formData.append("upload_preset", import.meta.env.VITE_CLOUD_PRESETS);

                return fetch(
                    `https://api.cloudinary.com/v1_1/${
                        import.meta.env.VITE_CLOUD_NAME
                    }/image/upload`,
                    {
                        method: "POST",
                        body: formData,
                    }
                ).then((response) => response.json());
            });

            const results = await Promise.all(uploadPromises);
            return results.map((result) => result.secure_url);
        } catch (error) {
            console.error("Error uploading images:", error);
            message.error("Failed to upload images");
            return [];
        }
    };

    const onFinish = async (values) => {
        if (fileList.length === 0) {
            message.error("Please select at least one image");
            return;
        }

        try {
            const imageUrls = await uploadFiles();
            if (imageUrls.length > 0) {
                await mutate({ ...values, imageUrls });
                message.success("Blog post created successfully");
                setFileList([]);
            }
        } catch (error) {
            console.error("Error creating blog post:", error);
            message.error("Failed to create blog post");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Create
            saveButtonProps={{
                ...saveButtonProps,
                onClick: () => {
                    formProps.form?.submit();
                },
                loading: submitting,
            }}
        >
            <Form {...formProps} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label={"Title"}
                    name={["title"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={"Content"}
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <MDEditor data-color-mode="light" />
                </Form.Item>

                <Form.Item
                    label="Blog Images"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload
                        multiple={true}
                        listType="picture-card"
                        fileList={fileList}
                        beforeUpload={() => false} // Prevent auto upload
                        onChange={handleFileChange}
                    >
                        <button
                            style={{
                                border: 0,
                                background: "none",
                            }}
                            type="button"
                        >
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label={"Category"}
                    name={["category", "id"]}
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
        </Create>
    );
};

// FE -> Create -> chọn file-> điền form -> submit -> upload -> cloudinary( API ) -> response -> url -> lưu vào database json-server
// workflow
