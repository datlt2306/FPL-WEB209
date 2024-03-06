import "./App.css";
import ShowName from "./components/ShowName";
import { IProduct } from "./interfaces/name";

function App() {
    const products: IProduct[] = [
        { id: 1, name: "Product A" }, // item
        { id: 2, name: "Product B" }, // item
        { id: 3, name: "Product C" }, // item
    ];
    return (
        <>
            {products.map((item: IProduct, index) => {
                return <div key={index}>{item.name}</div>;
            })}
            <ShowName name="Ahihi" />
        </>
    );
}

export default App;

//
