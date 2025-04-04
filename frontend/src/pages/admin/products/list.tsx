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
<<<<<<< HEAD

=======
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "categories",
        ids: tableProps?.dataSource?.map((item) => item?.category?.id).filter(Boolean) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });
<<<<<<< HEAD

=======
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
    return (
        <div>
            <List>
                <Table {...tableProps} rowKey="id">
<<<<<<< HEAD
<<<<<<< HEAD
                    <Table.Column dataIndex="_id" title={"ID"} />
=======
                    <Table.Column dataIndex="id" title={"ID"} />
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
=======
                    <Table.Column dataIndex="_id" title={"ID"} />
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
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
<<<<<<< HEAD
                                categoryData?.data?.find((item) => item.id === value?.id)?.name
=======
                                categoryData?.data?.find((item) => item.id === value?.id)?.title
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
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
<<<<<<< HEAD
<<<<<<< HEAD
                                <EditButton hideText size="small" recordItemId={record._id} />
                                <ShowButton hideText size="small" recordItemId={record._id} />
                                <DeleteButton hideText size="small" recordItemId={record._id} />
=======
                                <EditButton hideText size="small" recordItemId={record.id} />
                                <ShowButton hideText size="small" recordItemId={record.id} />
                                <DeleteButton hideText size="small" recordItemId={record.id} />
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
=======
                                <EditButton hideText size="small" recordItemId={record._id} />
                                <ShowButton hideText size="small" recordItemId={record._id} />
                                <DeleteButton hideText size="small" recordItemId={record._id} />
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
                            </Space>
                        )}
                    />
                </Table>
            </List>
        </div>
    );
};

export default ProductList;
