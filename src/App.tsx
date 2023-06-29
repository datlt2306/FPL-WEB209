import { useState } from "react";
import "./App.css";
import { ICar } from "./interfaces/car";
import { Button, List } from "./components";
import Form from "./components/Form";

const carsData = [
    { id: 1, name: "BMW" },
    { id: 2, name: "Mercedes" },
    { id: 3, name: "Audi" },
];

function App() {
    const [cars, setCars] = useState<ICar[]>(carsData);
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
            </div>
        </>
    );
}

export default App;
