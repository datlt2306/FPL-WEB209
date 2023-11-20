import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Add from './components/Add'
import List from './components/List'
import Detail from './components/Edit'
import Edit from './components/Edit'

function App() {
    return (
        <>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
            </div>
            <Routes>
                <Route path='/' element={<div>Home Page</div>} />
                <Route path='products' element={<List />} />
                <Route path='products/add' element={<Add />} />
                <Route path='products/:id' element={<Edit />} />
            </Routes>
        </>
    )
}

export default App
