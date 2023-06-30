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
const columns = [
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
                <Table data={carsData} config={columns} />
            </div>
        </div>
    );
}

export default App;
