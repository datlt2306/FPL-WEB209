import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/car";
import Table from "./components/Table";
const carsData = [
    { id: 1, name: "Car A", price: 100 }, // car
    { id: 2, name: "Car B", price: 200 }, // car
    { id: 3, name: "Car B", price: 300 }, // car
];
const config = [
    {
        label: "Name",
        key: "name",
    },
    {
        label: "Price",
        key: "price",
    },
];

function App() {
    const [cars, setCars] = useState<ICar[]>(carsData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const addCar = (car: ICar) => {
        setCars([...cars, car]);
    };
    const removeCar = (id: number) => {
        setCars(cars.filter((car) => car.id !== id));
    };
    return (
        <>
            <div className="w-96 border border-red-500 mx-auto my-5">
                <Form onAdd={addCar} />
                <List cars={cars} onRemove={removeCar} />
                <Table dataSource={carsData} config={config} />
            </div>
        </>
    );
}

export default App;
