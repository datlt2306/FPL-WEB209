import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ProductContextProvider from './context/Product.tsx'
import './index.css'
import CounterContextProvider from './context/Counter.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>
)
