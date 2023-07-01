import { useState } from "react";
import "./App.css";
import { ICar } from "./interfaces/car";
import { Button, List } from "./components";
import Form from "./components/Form";
import Table from "./components/Table";

const carsData = [
    { id: 1, name: "BMW", price: 100 }, // item
    { id: 2, name: "Mercedes", price: 150 }, //item
    { id: 3, name: "Audi", price: 200 }, //item
];
const columns = [
    {
        title: "Tên sản phẩm",
        dataIndex: "name",
        key: "name",
        render: ({ name }: any) => <span className="text-red-500">{name}</span>,
        header: ({ title }: any) => <h2>{title}</h2>,
    }, // column
    {
        title: "price",
        dataIndex: "price",
        key: "price",
        render: ({ price }: any) => <span className="font-bold text-red-500">{price * 2}</span>,
    }, // column
];
// //================================================
// const postData = [
//     { id: 1, title: "POST 1", body: "This is post 1", author: "Datlt" },
//     { id: 2, title: "POST 2", body: "This is post 2", author: "Sontv" },
// ];
// const columns1 = [
//     { title: "Tiêu đề", dataIndex: "title", key: "title" }, // column
//     { title: "Body", dataIndex: "body", key: "body" }, // column
//     { title: "Author", dataIndex: "author", key: "author" }, // column
// ];
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
                <Table dataSource={carsData} columns={columns} />
                {/* <Table dataSource={postData} columns={columns1} /> */}
            </div>
        </>
    );
}

export default App;
