import './App.css'
type HelloProps = {
    name: string
    onHandleClick: (name: string) => void
}
function Hello({ name, onHandleClick }: HelloProps) {
    return (
        <>
            {name}
            <button onClick={() => onHandleClick('Kien')}>Click</button>
        </>
    )
}

function App() {
    return (
        <>
            <Hello name='Dat' onHandleClick={(name: string) => console.log(name)} />
        </>
    )
}

export default App
