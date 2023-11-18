import { Toaster } from '@/components/ui/toaster'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductAdd from './components/ProductAdd'
import ProductEdit from './components/ProductEdit'
import ProductList from './components/ProductList'

function App() {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/product/add'>Product Add</Link>
            <Routes>
                <Route path='/' element={<div>Home</div>} />
                <Route path='product' element={<ProductList />} />
                <Route path='product/add' element={<ProductAdd />} />
                <Route path='product/:id/edit' element={<ProductEdit />} />
            </Routes>
            <Toaster />
        </>
    )
}

export default App
