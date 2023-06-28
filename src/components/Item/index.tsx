import { ICar } from "@/interfaces/car";
import { GoTrash } from "react-icons/go";
import { Button } from "..";
import styles from "./Item.module.css";

type ItemProps = {
    car: ICar;
};

const Item = ({ car }: ItemProps) => {
    return (
        <li className={styles.item}>
            {car.name}{" "}
            <Button danger>
                <GoTrash />
            </Button>
        </li>
    );
};

export default Item;
