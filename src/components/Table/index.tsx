type Props = {
    data: any;
    columns: any;
};

const Table = ({ data, columns }: Props) => {
    const renderHeaders = columns.map((column: any) => {
        return <th key={column.dataIndex}>{column.title}</th>;
    });
    const renderRows = data.map((item: any) => {
        const renderCells = columns.map((column: any) => {
            return <td key={column.dataIndex}>{item[column.dataIndex]}</td>;
        });
        return <tr key={item.id}>{renderCells}</tr>;
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
