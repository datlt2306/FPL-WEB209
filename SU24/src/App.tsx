/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}
const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [currentTodo, setCurrentTodo] = useState<ITodo | any>({});

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        // IFFE function
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
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa hay không???;`);
        if (confirm) {
            try {
                await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
                // thông báo
                alert("Xóa công việc thành công!!!");
                // rerender
                setTodos(todos.filter((todo) => todo.id !== id));
            } catch (error) {
                console.error(error);
            }
        }
    };

    const onHandleSubmit = async (formData: any) => {
        try {
            const response = await fetch(`http://localhost:3000/todos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            // alert
            alert("Thêm công việc thành công!!!");
            // rerender
            setTodos([...todos, data]);
            // reset form
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    const onHandleSave = async (data: any) => {
        if (!currentTodo) return;
        const newTodo = { ...currentTodo, title: data.title2 };

        try {
            const response = await fetch(`http://localhost:3000/todos/${currentTodo.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTodo),
            });
            const result = await response.json();
            // alert
            if (response.status !== 200) return alert("Cập nhật công việc thất bại!!!");
            alert("Cập nhật công việc thành công!!!");
            // reset current todo
            setCurrentTodo({});
            // rerender
            setTodos(todos.map((todo) => (todo.id == result.id ? result : todo)));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="App">
            <h2>Thêm công việc</h2>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("title")} />
                <button type="submit">Thêm</button>
            </form>
            <hr />
            <h2>Danh sách công việc</h2>
            <ul>
                {todos.map((todo: ITodo, index) => (
                    <li key={index}>
                        {currentTodo.id === todo.id ? (
                            <form onSubmit={handleSubmit(onHandleSave)}>
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
                                <button onClick={() => onHandleRemove(todo.id!)}>Xóa</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

// { id: 3, name: "C update"}
//  [ { id: 1, name: "A" }, {id: 2, name: "B"}]

// tạo 1 mảng mới
// [ { id: 1, name: "A"}, {id: 2, name: "B update"}]
