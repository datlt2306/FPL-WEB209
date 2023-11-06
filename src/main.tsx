import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductContextProvider, { ProductContext } from './context/Product.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProductContextProvider>
        <App />
    </ProductContextProvider>
)
