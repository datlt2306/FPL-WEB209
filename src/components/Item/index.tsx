import { Button } from "@/components";

type Props = {};

const Item = (props: Props) => {
    return (
        <li>
            Item <Button primary>Remove</Button>
        </li>
    );
};

export default Item;
