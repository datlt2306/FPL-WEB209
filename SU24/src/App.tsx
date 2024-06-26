/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [editingProductId, setEdittingProductId] = useState<number | null>(null);
    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const onHandleRemove = (id: number) => {
        const confirm = window.confirm("Are you sure you want to delete this item?");
        if (confirm) {
            fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE",
            }).then(() => setProducts(products.filter((item) => item.id !== id)));
        }
    };
    return (
        <div className="App">
            <h2>Thêm sản phẩm</h2>
            <form>
                <input type="text" />
                <button>Thêm</button>
            </form>
            <hr />
            {products.map((item) => (
                <div>
                    {editingProductId === item.id ? (
                        <form>
                            <input type="text" defaultValue={item.name} />
                            <button>Save</button>
                            <button onClick={() => setEdittingProductId(null)}>Cancel</button>
                        </form>
                    ) : (
                        <>
                            <span onClick={() => setEdittingProductId(item.id)}>{item.name}</span>
                            <button onClick={() => onHandleRemove(item.id)}>Xóa</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default App;
