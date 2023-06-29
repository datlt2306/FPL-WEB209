import React from "react";
import { Button } from "..";
import { GoTrash } from "react-icons/go";
type Props = {};

const Item = (props: Props) => {
    return (
        <li className="flex justify-between items-center p-2">
            Item
            <Button type="danger" icon={<GoTrash />} />
        </li>
    );
};

export default Item;
