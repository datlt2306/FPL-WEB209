import React from "react";
import { Item } from "..";
import { ICar } from "@/interfaces/car";

type ListProps = {
    cars: ICar[];
    onRemove: (id: number) => void;
};

const List = ({ cars, onRemove }: ListProps) => {
    return (
        <ul>
            {cars?.map((car) => (
                <Item key={car.id} car={car} onRemove={onRemove} />
            ))}
        </ul>
    );
};

export default List;
