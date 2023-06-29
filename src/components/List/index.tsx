import React from "react";
import { Item } from "..";
import { ICar } from "@/interfaces/car";

type ListProps = {
    data: ICar[];
    onRemove: (id: number) => void;
};

const List = ({ data, onRemove }: ListProps) => {
    return (
        <ul>
            {data?.map((car) => (
                <Item key={car.id} car={car} onRemove={onRemove} />
            ))}
        </ul>
    );
};

export default List;
