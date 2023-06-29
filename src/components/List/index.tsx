import React from "react";
import { Item } from "..";

type Props = {};

const List = (props: Props) => {
    return (
        <ul>
            <Item />
            <Item />
            <Item />
        </ul>
    );
};

export default List;
