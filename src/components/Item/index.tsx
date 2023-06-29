import { ICar } from "@/interfaces/car";
import { GoTrash } from "react-icons/go";
import { Button } from "..";
type ItemProps = {
    car: ICar;
};

const Item = ({ car }: ItemProps) => {
    return (
        <li className="flex justify-between items-center p-2">
            {car.name}
            <Button type="danger" icon={<GoTrash />} />
        </li>
    );
};

export default Item;
