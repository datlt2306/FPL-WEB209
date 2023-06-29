import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/car";

const carsData: ICar[] = [
    { id: 1, name: "BMW" },
    { id: 2, name: "FORD" },
    { id: 3, name: "TOYOTA" },
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
            </div>
        </>
    );
}

export default App;
