import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import List from './features/product/_components/List'
import Add from './features/product/_components/Add'
import Edit from './features/product/_components/Edit'
import Routers from './routes'
function App() {
    return (
        <>
            <Routers />
        </>
    )
}

export default App
