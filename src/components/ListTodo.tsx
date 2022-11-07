import { ITodo } from "@/interfaces/todo";
import React from "react";
import ItemTodo from "./ItemTodo";

type ListTodoProps = {
    todos: ITodo[];
};

const ListTodo = ({ todos }: ListTodoProps) => {
    return (
        <>
            {todos.map((todo, index) => (
                <div key={index}>
                    <ItemTodo todo={todo} />
                </div>
            ))}
        </>
    );
};

export default ListTodo;
