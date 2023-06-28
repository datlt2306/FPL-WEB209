import React from "react";
import { Item } from "..";
import { ICar } from "@/interfaces/car";

type ListProps = {
    cars: ICar[];
};

const List = ({ cars }: ListProps) => {
    return (
        <ul>
            {cars?.map((car) => (
                <Item key={car.id} car={car} />
            ))}
        </ul>
    );
};

export default List;
