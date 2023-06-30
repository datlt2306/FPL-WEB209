// type Props = {};

import { ICar } from "@/interfaces/car";

const Table = ({ dataSource, config }: any) => {
    const renderHeaders = config.map((column: any) => {
        if (column.header) {
            return <th>{column.header(column)}</th>;
        }
        return <th>{column.label}</th>;
    });
    const renderRows = dataSource.map((car: ICar) => {
        const renderColumns = config.map((column: any) => {
            return <td>{column.render(car)}</td>;
        });
        return <tr>{renderColumns}</tr>;
    });
    return (
        <div>
            <table className="w-full">
                <thead>
                    <tr>{renderHeaders}</tr>
                </thead>
                <tbody>{renderRows}</tbody>
            </table>
        </div>
    );
};

export default Table;
