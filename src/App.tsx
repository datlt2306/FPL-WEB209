import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/Car";
import Table from "./components/Table";
const carsData = [
    { id: 1, name: "BMW", price: 100 }, // item
    { id: 2, name: "Mercedes", price: 200 }, // item
    { id: 3, name: "Ford", price: 300 }, // item
];
const carsConfigData = [
    {
        label: "Name",
        key: "name",
        render: (item: any) => <span className="uppercase text-red-500">{item.name}</span>,
        header: (item: any) => <span className="text-green-500">{item.label}</span>,
    },
    {
        label: "Price",
        key: "price",
        render: (item: any) => <span className="font-bold">{item.price}</span>,
    },
];

const postsData = [
    { id: 1, title: "Post 1", body: "Post 1 Body", author: "Datlt" },
    { id: 2, title: "Post 2", body: "Post 2 Body", author: "KienTT" },
    { id: 3, title: "Post 3", body: "Post 3 Body", author: "TungVM" },
];

const postsConfigData = [
    { label: "Title", key: "title", render: (item: any) => item.title },
    { label: "Body", key: "body", render: (item: any) => item.body },
    { label: "Author", key: "author", render: (item: any) => item.author },
];
function App() {
    const [cars, setCars] = useState<ICar[]>(carsData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null>(null);

    const addCar = (car: ICar) => {
        setCars([...cars, car]);
    };
    const removeCar = (car: ICar) => {
        setCars(cars.filter((item) => item.id !== car.id));
    };
    return (
        <div>
            <div className="w-96 mx-auto border">
                <Form onAdd={addCar} />
                <List cars={cars} onRemove={removeCar} />
                <hr />
                <h2>Table Component</h2>
                <Table data={carsData} config={carsConfigData} />
                <Table data={postsData} config={postsConfigData} />
            </div>
        </div>
    );
}

export default App;
