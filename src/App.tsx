import './App.css'
import Add from './components/Add'
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
            {/* <Edit onEdit={onHandleEdit} /> */}
            <hr />
            <Signup />
            <hr />
            <Signin />
        </>
    )
}

export default App
