import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductContextProvider from './context/product.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProductContextProvider>
        <App />
    </ProductContextProvider>
)
