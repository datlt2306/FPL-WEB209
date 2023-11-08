import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createContext, useState } from 'react'
import CounterContextProvider from './context/counter'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CounterContextProvider>
        <App />
    </CounterContextProvider>
)
