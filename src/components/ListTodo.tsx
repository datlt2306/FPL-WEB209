import React from "react";
import ItemTodo from "./ItemTodo";

type Props = {};

const ListTodo = (props: Props) => {
    return (
        <>
            <ItemTodo />
            <ItemTodo />
            <ItemTodo />
            <ItemTodo />
        </>
    );
};

export default ListTodo;
