import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Item from './components/Item';

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]) // 1
  

  useEffect(() => { // 3
    console.log('1');
    const getProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, [count])

  const onRemove = async (id) => {
    fetch('http://localhost:3001/products/'+id, {
      method: "DELETE"
    });

    const newProducts = products.filter(item => item.id !== id)
    setProducts(newProducts)
  }
  return ( // 2
    <div className="App">
      {count}
      {products.map((item, index) => <Item key={index} product={item} onHandleRemove={onRemove} />)}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default App
