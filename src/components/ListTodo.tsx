import React from "react";
import { ITodo } from "../interfaces/todo";
import ItemTodo from "./ItemTodo";

type ListTodoProps = {
    todos: ITodo[];
};

const ListTodo = (props: ListTodoProps) => {
    return (
        <>
            {props.todos.map((todo) => (
                <ItemTodo todo={todo} />
            ))}
        </>
    );
};

export default ListTodo;
