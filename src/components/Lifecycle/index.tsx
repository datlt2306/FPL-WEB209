// export default class Lifecycle extends React.Component {
//     constructor(props: any) {
//         // 1
//         super(props);
//         this.state = {
//             count: 0,
//         };
//         console.log("constructor");
//     }

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }

//     componentDidUpdate() {
//         document.title = `You clicked ${this.state.count} times`;
//     }
//     render() {
//         // 2
//         return (
//             <div>
//                 Count: {this.state.count}
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     Increase
//                 </button>
//             </div>
//         );
//     }
// }

import React, { useEffect, useState } from "react";

interface IProduct {
    id: number;
    name: string;
    price: number;
}

const Lifecycle = () => {
    const [count, setCount] = useState(0); // 1
    const [name, setName] = useState("John");
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        // call api
        (async () => {
            const response = await fetch(`http://localhost:3000/products`);
            const data = await response.json();
            setProducts(data);
        })();
    }, []);
    return (
        // 2
        <div>
            {products.length > 0 ? products.map((item) => <div>{item.name}</div>) : "Loading..."}
        </div>
    );
};

export default Lifecycle;

/**
 * 1. Mặc định useEffect không có tham số 2 thì là (didMount + didUpdate)
 * 2. Tham số 2 trong useEffect là [] thì là (didMount)
 * 3.
 */
