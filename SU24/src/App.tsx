/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

const App = () => {
    const [products, setProducts] = useState<any>([]);
    const [editing, setEditing] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);
    const onHandleRemove = (id: number) => {
        const confirm = window.confirm("Are you sure you wish to delete this item?");
        if (confirm) {
            fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then(() => setProducts(products.filter((product: any) => product.id !== id)));
        }
    };
    return (
        <div>
            <h2>Thêm sản phẩm</h2>
            <form>
                <input type="text" />
                <button>Thêm</button>
            </form>
            <h1>Product List</h1>
            <ul>
                {products.map((product: any) => (
                    // Sử dụng hàm map để tạo một danh sách các sản phẩm.
                    <li key={product.id}>
                        {editing ? (
                            <form>
                                <input />
                                <button>save</button>
                                <button>cancel</button>
                            </form>
                        ) : (
                            <span onClick={() => setEditing(true)}>{product.name}</span>
                        )}

                        <button onClick={() => onHandleRemove(product.id)}>Xóa</button>
                    </li> // Hiển thị tên sản phẩm.
                ))}
            </ul>
        </div>
    );
};

export default App;
