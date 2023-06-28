import { Item } from "@/components";
import { ICar } from "@/interfaces/Car";

type ListProps = {
    cars: ICar[];
    onRemove: (car: ICar) => void;
};

const List = ({ cars, onRemove }: ListProps) => {
    return (
        <ul>
            {cars?.map((car: ICar) => (
                <Item key={car.id} car={car} onRemove={onRemove} />
            ))}
        </ul>
    );
};

export default List;
