import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/Car";
const carsData = [
    { id: 1, name: "BMW" },
    { id: 2, name: "Mercedes" },
    { id: 3, name: "Ford" },
];
function App() {
    const [cars, setCars] = useState<ICar[]>(carsData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null>(null);

    const addCar = (car: ICar) => {};
    const removeCar = (id: number) => {};
    const updateCar = (car: ICar) => {};
    const fetchCars = () => {};
    return (
        <div>
            <div className="w-96 mx-auto border">
                <Form />
                <List cars={cars} />
            </div>
        </div>
    );
}

export default App;
