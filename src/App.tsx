import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import { IProduct } from './interfaces/Product'
import ProductAdd from './components/ProductAdd'
import ProductEdit from './components/ProductEdit'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Counter from './components/Counter'

function App() {
    return (
        <>
            {/* <Counter /> */}
            <ProductList />
            {/* <ProductAdd /> */}
            {/* <ProductEdit /> */}
        </>
    )
}

export default App
