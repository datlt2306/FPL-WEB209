import { ITodo } from "@/interfaces/todo";
import React from "react";

type ItemTodoProps = {
    todo: ITodo;
};

const ItemTodo = ({ todo }: ItemTodoProps) => {
    return (
        <>
            {todo.name} <button>Remove</button>
        </>
    );
};

export default ItemTodo;
