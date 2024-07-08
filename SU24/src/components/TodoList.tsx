/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ITodo } from "../interfaces/todo";

type TodoListProps = {
    todos: ITodo[];
    currentTodo: any;
    setCurrentTodo: (todo: ITodo) => void;
    onRemove: (id: number) => void;
    onSave: (data: any) => void;
    onToggled: (todo: ITodo) => void;
};

const TodoList = ({
    todos,
    currentTodo,
    setCurrentTodo,
    onRemove,
    onSave,
    onToggled,
}: TodoListProps) => {
    const { register, handleSubmit, reset } = useForm();

    return (
        <ul>
            {todos.map((todo: ITodo, index: number) => (
                <li key={index}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggled(todo)}
                    />
                    {currentTodo.id === todo.id ? (
                        <form onSubmit={handleSubmit(onSave)}>
                            <input type="text" {...register("title-update")} />
                            <button type="submit">Lưu</button>
                            <button onClick={() => setCurrentTodo({} as ITodo)}>Hủy</button>
                        </form>
                    ) : (
                        <>
                            <span
                                onClick={() => {
                                    reset({ "title-update": todo.title });
                                    setCurrentTodo(todo);
                                }}
                                style={{
                                    textDecoration: todo.completed ? "line-through" : "none",
                                }}
                            >
                                {todo.title}
                            </span>
                            <button onClick={() => onRemove(todo.id)}>Xóa</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
