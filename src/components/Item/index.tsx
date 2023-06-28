import { Button } from "@/components";
import { ICar } from "@/interfaces/Car";
import { GoTrash } from "react-icons/go";

type ItemProps = {
    car: ICar;
    onRemove: (car: ICar) => void;
};

const Item = ({ car, onRemove }: ItemProps) => {
    return (
        <li className="flex justify-between items-center p-2 border-b border-red-200">
            {car.name}
            <div>
                <Button type="danger" onClick={() => onRemove(car)} icon={<GoTrash />} />
            </div>
        </li>
    );
};

export default Item;
