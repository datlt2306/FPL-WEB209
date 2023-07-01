import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/car";
import Table from "./components/Table";

const carsData: ICar[] = [
    { id: 1, name: "BMW", price: 200 },
    { id: 2, name: "FORD", price: 300 },
    { id: 3, name: "TOYOTA", price: 400 },
];

const columns = [
    { title: "Name", dataIndex: "name", key: "name" }, // column
    { title: "Price", dataIndex: "price", key: "price" }, // column
];

// =================

const postsData = [
    { id: 1, title: "Post A", desc: "Mo ta A", author: "Datlt" },
    { id: 2, title: "Post B", desc: "Mo ta B", author: "Kientt" },
];
const columns2 = [
    { title: "Title", dataIndex: "title", key: "title" }, // column
    { title: "Author", dataIndex: "author", key: "author" }, // column
];
function App() {
    //State
    const [cars, setCars] = useState<ICar[]>(carsData);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<string>("");

    // Action
    const addCar = (car: ICar) => {
        setCars([...cars, car]);
    };
    const removeCar = (id: number) => {
        setCars(cars.filter((car) => car.id !== id));
    };
    return (
        <>
            <div className="w-96 border border-gray-500 p-2 mx-auto">
                <Form onAdd={addCar} />
                <List dataSource={cars} onRemove={removeCar} />
                <hr />
                <Table dataSource={carsData} columns={columns} />
                <Table dataSource={postsData} columns={columns2} />
            </div>
        </>
    );
}

export default App;
