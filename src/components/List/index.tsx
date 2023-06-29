import React from "react";
import { Item } from "..";
import { ICar } from "@/interfaces/car";

type ListProps = {
    dataSource: ICar[];
    onRemove: (id: number) => void;
};

const List = ({ onRemove, dataSource }: ListProps) => {
    return (
        <>
            <ul>
                {dataSource?.map((car) => (
                    <Item onRemove={onRemove} key={car.id} car={car} />
                ))}
            </ul>
        </>
    );
};

export default List;
