import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProductContextProvider from './context/product.tsx'
import CounterContextProvider from './context/counter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CounterContextProvider>
        <ProductContextProvider>
            <App />
        </ProductContextProvider>
    </CounterContextProvider>
)
