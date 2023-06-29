import { Button } from "..";
import styles from "./Item.module.css";
type Props = {};

const Item = (props: Props) => {
    return (
        <li className={styles.item}>
            Item <Button>Remove</Button>
        </li>
    );
};

export default Item;
