import React from "react";
import { Item } from "..";
import { ICar } from "@/interfaces/car";

type ListProps = {
    data: ICar[];
};

const List = ({ data }: ListProps) => {
    return (
        <ul>
            {data?.map((car) => (
                <Item key={car.id} car={car} />
            ))}
        </ul>
    );
};

export default List;
