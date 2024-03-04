import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
const root = document.getElementById('root')!;


const myName = "Dat";
const myAge = 40;
const isMarried = true;
const myInfo = {
  name: "Dat",
  age: 20,
  hasChild: true
}
ReactDOM.createRoot(root).render(<>
  <h1>My Name: {myName}</h1>
  <h1>My Age: {myAge}</h1>
  <h1>Status: {isMarried ? 'Đã chết': 'Ế'}</h1>
  <h1>Info {myInfo.name} - {myInfo.age}</h1>
</>);


  
