import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/car";
import Table from "./components/Table";

const carData = [
    { id: 1, name: "BMW", price: 200 }, // item
    { id: 2, name: "FORD", price: 300 }, // item
    { id: 3, name: "MERCEDES", price: 400 }, // item
];
const columns = [
    { title: "Name", dataIndex: "name" }, // column
    { title: "Price", dataIndex: "price" }, // column
];
/**
 * postData = [{ id: 1, title: 'Post A', desc: 'Mô tả', author: "Datlt"}]
 */
function App() {
    const [cars, setCars] = useState<ICar[]>(carData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const addCar = (car: ICar) => {
        setCars([...cars, car]);
    };

    const removeCar = (id: any) => {
        setCars(cars.filter((car) => car.id !== id));
    };
    return (
        <>
            <div className="w-96 border border-gray-500 px-2 mx-auto">
                <Form onAdd={addCar} />
                <List data={cars} onRemove={removeCar} />

                <hr />
                <h2>Table</h2>
                <Table data={carData} columns={columns} />
            </div>
        </>
    );
}

export default App;
