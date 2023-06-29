import { ICar } from "@/interfaces/car";
import { GoTrash } from "react-icons/go";
import { Button } from "..";
type ItemProps = {
    car: ICar;
    onRemove: (id: number | string) => void;
};

const Item = ({ car, onRemove }: ItemProps) => {
    return (
        <li className="flex justify-between items-center p-2">
            {car.name}
            <Button onClick={() => onRemove(car.id!)} type="danger" icon={<GoTrash />} />
        </li>
    );
};

export default Item;
