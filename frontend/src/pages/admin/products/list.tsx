import {
    DateField,
    DeleteButton,
    EditButton,
    MarkdownField,
    ShowButton,
    useTable,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { List, Space, Table } from "antd";
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

    console.log(tableProps);

    return (
        <div>
            <List>
                <Table {...tableProps} rowKey="id">
                    <Table.Column dataIndex="id" title={"ID"} />
                    <Table.Column dataIndex="name" title={"Tên"} />
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
                                categoryData?.data?.find((item) => item.id === value?.id)?.title
                            )
                        }
                    />
                    <Table.Column dataIndex="stock" title={"Số lượng"} />
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
                                <EditButton hideText size="small" recordItemId={record.id} />
                                <ShowButton hideText size="small" recordItemId={record.id} />
                                <DeleteButton hideText size="small" recordItemId={record.id} />
                            </Space>
                        )}
                    />
                </Table>
            </List>
        </div>
    );
};

export default ProductList;
