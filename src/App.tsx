import "./App.css";
import useProductQuery from "./hooks/useProductQuery";
import { IProduct } from "./interfaces/Product";

function App() {
    const { data } = useProductQuery();
    return <>{data && data?.map((product: IProduct) => <div>{product.name}</div>)}</>;
}

export default App;
