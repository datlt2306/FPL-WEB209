import React from "react";
import { Item } from "..";
import { ICar } from "@/interfaces/car";

type ListProps = {
    dataSource: ICar[];
};

const List = ({ dataSource }: ListProps) => {
    return (
        <>
            <ul>
                {dataSource?.map((car) => (
                    <Item key={car.id} car={car} />
                ))}
            </ul>
        </>
    );
};

export default List;
