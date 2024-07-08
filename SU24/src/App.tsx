/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces/todo";

const App = () => {
    const [todos, setTodos] = useState([] as ITodo[]);
    const [currentTodo, setCurrentTodo] = useState({} as ITodo);
    useEffect(() => {
        // iffe function
        (async () => {
            try {
                const response = await fetch(`http://localhost:3000/todos`);
                const data = await response.json();
                if (response.status !== 200) {
                    throw new Error(data.message);
                }
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
                // rerender
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
            alert("Thêm sản phẩm thành công");
            // rerender
            setTodos([...todos, result]);
            // reset form
            // reset();
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
                body: JSON.stringify({ ...currentTodo, title: data["title-update"] }),
            });
            const result = await response.json();
            if (response.status !== 200) return alert("Cập nhật sản phẩm thất bại");
            alert("Cập nhật sản phẩm thành công");
            // rerender
            setTodos(todos.map((todo) => (todo.id === result.id ? result : todo)));
            // đóng input
            setCurrentTodo({} as ITodo);
        } catch (error) {
            console.error(error);
        }
    };
    const toggleChecked = async (todo: ITodo) => {
        try {
            const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...todo, completed: !todo.completed }),
            });
            const result = await response.json();
            if (response.status !== 200) return alert(`Cập nhật thất bại`);
            // rerender
            setTodos(todos.map((todo) => (todo.id === result.id ? result : todo)));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="App">
            <h2>Thêm công việc</h2>
            <TodoAdd onSubmit={onHandleSubmit} />
            <hr />
            <h2>Danh sách công việc</h2>
            <TodoList
                todos={todos}
                currentTodo={currentTodo}
                setCurrentTodo={setCurrentTodo}
                onSave={onHandleSave}
                onRemove={onHandleRemove}
                onToggled={toggleChecked}
            />
        </div>
    );
};

export default App;

// 3
// [1,2,3,4,5]

// new: [1,2,4,5]

// { id: 4, name: "C update"}
// [{ id: 1, name: "A"}, { id: 2, name: "B"}, { id: 3, name: "C"}];

// [{ id: 1, name: "A"}, { id: 2, name: "B"}, { id: 3, name: "C update"}];
