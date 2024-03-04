import ReactDOM from 'react-dom/client';
import './index.css';
const root = document.getElementById('root')!;


function hello(){
  return <h1>Hello</h1>
}

function Hello(): JSX.Element{
  return <h1>Hello</h1>
}
const myName: string = "Dat";
const myAge: number = 40;
const isMarried: boolean = true;
const myInfo: {name: string, age: number, hasChild: boolean} = {
  name: "Dat",
  age: 20,
  hasChild: true
}

ReactDOM.createRoot(root).render(<>
  <h1>My Name: {myName}</h1>
  <h1>My Age: {myAge}</h1>
  <h1>Status: {isMarried ? 'Đã chết': 'Ế'}</h1>
  <h1>Info {myInfo.name} - {myInfo.age}</h1>
  <hr />
  <h1>Function: {hello()}</h1>
  <h1>Component: <Hello /></h1>
</>);


  
