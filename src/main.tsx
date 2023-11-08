import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ProductContextProvider from './context/Product.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProductContextProvider>
        <App />
    </ProductContextProvider>
)
