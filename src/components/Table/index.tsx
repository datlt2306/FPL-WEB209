import React from "react";

type Props = {
    dataSource: any[];
    columns: any[];
};

const Table = ({ dataSource, columns }: Props) => {
    // Render ra thead
    const renderHeaders = columns.map((column) => {
        return (
            <th key={column.key}>{column.header ? column.header(column.title) : column.title}</th>
        );
    });
    // Render ra tr trong tbody
    const renderRows = dataSource.map((item) => {
        // render td
        const renderCell = columns.map((column) => {
            return (
                <td key={column.key}>
                    {column.render ? column.render(item) : item[column.dataIndex]}
                </td>
            );
        });

        return <tr key={item.id}>{renderCell}</tr>;
    });

    return (
        <table>
            <thead>
                <tr>{renderHeaders}</tr>
            </thead>
            <tbody>{renderRows}</tbody>
        </table>
    );
};

export default Table;
