import { ICar } from "@/interfaces/car";
import { GoTrash } from "react-icons/go";
import { Button } from "..";
import styles from "./Item.module.css";

type ItemProps = {
    car: ICar;
    onRemove: (id: number) => void;
};

const Item = ({ car, onRemove }: ItemProps) => {
    return (
        <li className={styles.item}>
            {car.name}
            <Button type="danger" onClick={() => onRemove(car.id!)} icon={<GoTrash />} />
        </li>
    );
};

export default Item;
