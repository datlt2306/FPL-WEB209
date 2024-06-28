/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { ITodo } from "./interfaces/ITodo";
import { useForm } from "react-hook-form";

const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [editTodoId, setEditTodoId] = useState<number | null>(null);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        // IFFE Function
        (async () => {
            try {
                const response = await fetch(`http://localhost:3000/todos`);
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const onHandleRemove = async (id: number) => {
        try {
            const confirm = window.confirm(`Bạn có chắc chắn muốn xóa công việc này không?`);
            if (confirm) {
                await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
                alert("Xóa công việc thành công");

                // rerender
                setTodos(todos.filter((todo) => todo.id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    };
    const onSubmit = async (data: any) => {
        const newTodo = { ...data, completed: false };
        //reset form
        try {
            const response = await fetch(`http://localhost:3000/todos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTodo),
            });

            const data = await response.json();
            alert("Thêm công việc thành công");
            reset();
            // rerender
            setTodos([...todos, data]);
        } catch (error) {
            console.error(error);
        }
    };

    const onSave = async (data: any) => {
        const result = todos.find((todo) => todo.id === editTodoId);
        const newTodo = { ...result, title: data.title2 };
        try {
            const response = await fetch(`http://localhost:3000/todos/${editTodoId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTodo),
            });
            const data = await response.json();

            // thông báo thành công
            alert("Cập nhật công việc thành công");
            // đóng input => setEditTodoId(null)
            setEditTodoId(null);
            // reRender
            setTodos(todos.map((todo) => (todo.id === data.id ? data : todo)));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <h2>Thêm công việc</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("title")} />
                <button type="submit">Thêm</button>
            </form>
            <hr />
            <h2>Danh sách công việc</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {editTodoId === todo.id ? (
                            <form onSubmit={handleSubmit(onSave)}>
                                <input type="text" {...register("title2")} />
                                <button type="submit">Save</button>
                                <button onClick={() => setEditTodoId(null)}>Cancel</button>
                            </form>
                        ) : (
                            <>
                                <span
                                    onClick={() => {
                                        reset({ title2: todo.title });
                                        setEditTodoId(todo.id!);
                                    }}
                                >
                                    {todo.title}
                                </span>
                                <button onClick={() => onHandleRemove(todo.id!)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
