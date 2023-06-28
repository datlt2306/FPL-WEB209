import { ICar } from "@/interfaces/car";
import { Button } from "..";
import styles from "./Item.module.css";

type ItemProps = {
    car: ICar;
};

const Item = ({ car }: ItemProps) => {
    return (
        <li className={styles.item}>
            {car.name} <Button />
        </li>
    );
};

export default Item;
