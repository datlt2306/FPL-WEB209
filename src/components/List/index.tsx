import { Item } from "@/components";
import { ICar } from "@/interfaces/Car";

type ListProps = {
    cars: ICar[];
};

const List = ({ cars }: ListProps) => {
    return (
        <ul>
            {cars?.map((car: ICar) => (
                <Item key={car.id} car={car} />
            ))}
        </ul>
    );
};

export default List;
