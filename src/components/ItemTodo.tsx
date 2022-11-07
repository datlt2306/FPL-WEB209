import React from "react";
import { ITodo } from "../interfaces/todo";

type ItemTodoProps = {
    todo: ITodo;
};

const ItemTodo = (props: ItemTodoProps) => {
    return (
        <div>
            {props.todo.name} - {props.todo.price}
        </div>
    );
};

export default ItemTodo;
