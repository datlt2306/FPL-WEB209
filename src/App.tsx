import './App.css'
import Add from './components/Add'
import Counter from './components/Counter'
import List from './components/List'
import Signin from './components/Signin'
import Signup from './components/Signup'

function App() {
    return (
        <>
            <Counter />
            <List />
            <hr />
            <Add />
            <hr />
            {/* <Edit onEdit={onHandleEdit} /> */}
            <hr />
            <Signup />
            <hr />
            <Signin />
        </>
    )
}

export default App
