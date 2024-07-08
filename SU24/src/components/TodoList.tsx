/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ITodo } from "../interfaces/ITodo";

type TodoListProps = {
    todos: ITodo[];
    onSave: (data: any) => void;
    onRemove: (id: number) => void;
    currentTodo: ITodo;
    setCurrentTodo: ({}) => void;
};

const TodoList = ({ todos, onSave, onRemove, currentTodo, setCurrentTodo }: TodoListProps) => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <ul>
            {todos.map((todo: ITodo, index: number) => (
                <li key={index}>
                    {currentTodo.id == todo.id ? (
                        <form onSubmit={handleSubmit(onSave)}>
                            <input type="text" {...register("title2")} />
                            <button type="submit">Lưu</button>
                            <button onClick={() => setCurrentTodo({})}>Hủy</button>
                        </form>
                    ) : (
                        <>
                            <span
                                onClick={() => {
                                    reset({ title2: todo.title });
                                    setCurrentTodo(todo);
                                }}
                            >
                                {todo.title}
                            </span>
                            <button onClick={() => onRemove(todo.id!)}>Xóa</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
