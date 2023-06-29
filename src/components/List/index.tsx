import { ICar } from "@/interfaces/car";
import { Item } from "..";

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
