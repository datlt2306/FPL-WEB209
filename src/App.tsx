import "./App.css";
import Product from "./components/Product";
import ShowName from "./components/ShowName";
import { IProduct } from "./interfaces/name";

function App() {
    const products: IProduct[] = [
        { id: 1, name: "Product A", price: 200 }, // item
        { id: 2, name: "Product B", price: 300 }, // item
        { id: 3, name: "Product C", price: 400 }, // item
    ];
    return (
        <>
            {products.map((item: IProduct, index) => {
                return <Product item={item} />;
            })}
            <ShowName name="Ahihi" />
        </>
    );
}

export default App;

//
