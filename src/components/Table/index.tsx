type Props = {
    data: any[];
    config: any[];
};

const Table = ({ data, config }: Props) => {
    const renderHeaders = config.map((column) => {
        if (column.header) {
            return <th>{column?.header(column)}</th>;
        }
        return <th key={column.key}>{column.label}</th>;
    });
    const renderRows = data.map((item) => {
        const renderCell = config.map((column) => {
            return <td key={column.key}>{column.render(item)}</td>;
        });
        return <tr key={item.id}>{renderCell}</tr>;
    });
    return (
        <table className="w-full">
            <thead>
                <tr>{renderHeaders}</tr>
            </thead>
            <tbody>{renderRows}</tbody>
        </table>
    );
};

export default Table;
