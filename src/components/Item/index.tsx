import { Button } from "@/components";
import { ICar } from "@/interfaces/Car";

type ItemProps = {
    car: ICar;
};

const Item = ({ car }: ItemProps) => {
    return (
        <li className="flex justify-between items-center p-2 border-b border-red-200">
            {car.name} <Button danger>Remove</Button>
        </li>
    );
};

export default Item;
