import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ProductContextProvider from './context/Product.tsx'
import './index.css'
import CounterContextProvider from './context/Counter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CounterContextProvider>
        <ProductContextProvider>
            <App />
        </ProductContextProvider>
    </CounterContextProvider>
)
