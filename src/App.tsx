import './App.css'
import ProductList from './components/ProductList'
import ProductAdd from './components/ProductAdd'
import { Toaster } from '@/components/ui/toaster'

function App() {
    return (
        <>
            {/* <Counter /> */}
            <ProductList />
            <ProductAdd />
            {/* <ProductEdit /> */}
            <Toaster />
        </>
    )
}

export default App
