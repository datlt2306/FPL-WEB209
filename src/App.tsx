import './App.css'
import Signin from './Signin'
import Signup from './Signup'
import Add from './components/Add'
import Edit from './components/Edit'
import List from './components/List'
function App() {
    return (
        <>
            <List />
            <hr />
            <Add />
            <hr />
            <Edit />
            <hr />
            {/*<Signup />
            <hr />
            <Signin /> */}
        </>
    )
}

export default App
