import './App.css'
import Add from './components/Add'
import Counter from './components/Counter'
import Edit from './components/Edit'
import List from './components/List'
import Signin from './components/Signin'
import Signup from './components/Signup'

function App() {
    return (
        <>
            <List />
            <hr />
            <Add />
            <hr />
            <Edit />
            <hr />
            <Signup />
            <hr />
            <Signin />
        </>
    )
}

export default App
