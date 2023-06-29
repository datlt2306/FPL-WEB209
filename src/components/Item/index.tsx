import { GoTrash } from "react-icons/go";
import { Button } from "..";
import styles from "./Item.module.css";
import { ICar } from "@/interfaces/car";

type ItemProps = {
    car: ICar;
    onRemove: (id: number) => void;
};

const Item = ({ onRemove, car }: ItemProps) => {
    return (
        <li className={styles.item}>
            {car.name}
            <Button onClick={() => onRemove(car.id!)} type="danger" icon={<GoTrash />} />
        </li>
    );
};

export default Item;
