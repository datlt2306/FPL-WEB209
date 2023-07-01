import { useState } from "react";
import "./App.css";
import { ICar } from "./interfaces/car";
import { Button, List } from "./components";
import Form from "./components/Form";
import Table from "./components/Table";

const carsData = [
    { id: 1, name: "BMW", price: 100 },
    { id: 2, name: "Mercedes", price: 150 },
    { id: 3, name: "Audi", price: 200 },
];
const columns = [
    { title: "Tên sản phẩm", dataIndex: "name", key: "name" }, // column
    { title: "price", dataIndex: "price", key: "price" }, // column
];
//================================================
const postData = [
    { id: 1, title: "POST 1", body: "This is post 1", author: "Datlt" },
    { id: 2, title: "POST 2", body: "This is post 2", author: "Sontv" },
];
const columns1 = [
    { title: "Tiêu đề", dataIndex: "title", key: "title" }, // column
    { title: "Body", dataIndex: "body", key: "body" }, // column
    { title: "Author", dataIndex: "author", key: "author" }, // column
];
function App() {
    const [cars, setCars] = useState<ICar[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<null>(null);

    const addCar = (car: ICar) => {
        setCars([...cars, car]);
    };
    const removeCar = (id: number | string) => {
        setCars(cars.filter((car) => car.id !== id));
    };
    return (
        <>
            <div className="w-96 mx-auto border border-gray-500 p-2">
                <Form onAdd={addCar} />
                <List data={cars} onRemove={removeCar} />
                <hr />
                <Table dataSource={postData} columns={columns1} />
                <Table dataSource={carsData} columns={columns} />
            </div>
        </>
    );
}

export default App;
