import {
    DateField,
    DeleteButton,
    EditButton,
    List,
    MarkdownField,
    ShowButton,
    useTable,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";
import React from "react";

const ProductList = () => {
    const { tableProps } = useTable({
        syncWithLocation: false,
    });

    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "categories",
        ids: tableProps?.dataSource?.map((item) => item?.category?.id).filter(Boolean) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    return (
        <div>
            <List>
                <Table {...tableProps} rowKey="id">
                    <Table.Column dataIndex="_id" title={"ID"} />
                    <Table.Column dataIndex="name" title={"Tên sản phẩm"} />
                    <Table.Column
                        dataIndex="description"
                        title={"Mô tả"}
                        render={(value: any) => {
                            if (!value) return "-";
                            return <MarkdownField value={value.slice(0, 80) + "..."} />;
                        }}
                    />
                    <Table.Column
                        dataIndex={"category"}
                        title={"Category"}
                        render={(value) =>
                            categoryIsLoading ? (
                                <>Loading...</>
                            ) : (
                                categoryData?.data?.find((item) => item.id === value?.id)?.name
                            )
                        }
                    />
                    <Table.Column dataIndex="status" title={"Status"} />
                    <Table.Column
                        dataIndex={["createdAt"]}
                        title={"Created at"}
                        render={(value: any) => <DateField value={value} />}
                    />
                    <Table.Column
                        title={"Actions"}
                        dataIndex="actions"
                        render={(_, record: BaseRecord) => (
                            <Space>
                                <EditButton hideText size="small" recordItemId={record._id} />
                                <ShowButton hideText size="small" recordItemId={record._id} />
                                <DeleteButton hideText size="small" recordItemId={record._id} />
                            </Space>
                        )}
                    />
                </Table>
            </List>
        </div>
    );
};

export default ProductList;
