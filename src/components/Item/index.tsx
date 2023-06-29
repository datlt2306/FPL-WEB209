import { GoTrash } from "react-icons/go";
import { Button } from "..";
import styles from "./Item.module.css";

type Props = {};

const Item = (props: Props) => {
    return (
        <li className={styles.item}>
            Item
            <Button type="danger" icon={<GoTrash />} />
        </li>
    );
};

export default Item;
