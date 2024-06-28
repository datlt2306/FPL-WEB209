/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}
const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [currentTodo, setCurrentTodo] = useState<any>({});
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
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
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
            try {
                const response = await fetch(`http://localhost:3000/todos/${id}`, {
                    method: "DELETE",
                });
                if (response.status !== 200) return alert("Xóa sản phẩm thất bại");
                alert("Xóa sản phẩm thành công");
                setTodos(todos.filter((todo) => todo.id !== id));
            } catch (error) {
                console.error(error);
            }
        }
    };
    const onHandleSubmit = async (data: any) => {
        try {
            const response = await fetch(`http://localhost:3000/todos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data, completed: false }),
            });
            const result = await response.json();
            if (response.status !== 201) return alert("Thêm sản phẩm thất bại");
            alert("Thêm sản phẩm thành công!!!");
            //rerender
            setTodos([...todos, result]);
            // reset form
            reset();
        } catch (error) {
            console.error(error);
        }
    };

    const onHandleSave = async (data: any) => {
        if (!currentTodo) return;
        try {
            const response = await fetch(`http://localhost:3000/todos/${currentTodo.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...currentTodo, title: data.title2 }),
            });
            const result = await response.json();
            if (response.status !== 200) return alert("Cập nhật sản phẩm thất bại");
            alert("Cập nhật sản phẩm thành công!!!");
            //rerender
            setTodos(todos.map((todo) => (todo.id == result.id ? result : todo)));
            // đóng lại input
            setCurrentTodo({});
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
                {todos.map((todo: ITodo, index: number) => (
                    <li key={index}>
                        {currentTodo.id == todo.id ? (
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

// 3
// [1,2,3,4,5]
// [1,2,4,5]

// { id: 5, title:"ReactJs"}
// [{id: 1, title: "Đọc sách"}, {id: 2, title: "Chơi game"}, {id: 3, title:"Đi chơi"}]

// [{id: 1, title: "Đọc sách"}, {id: 2, title: "Chơi game"}, { id: 3, title:"ReactJs"}]
