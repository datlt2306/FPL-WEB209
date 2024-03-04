import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'

const myName: string = 'Dat';
const myAge: number = 40;
const isStatus: boolean = false;
const myInfo: { name: string, age: number, status: boolean} = {
  name: 'Dat',
  age: 40,
  status: false
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="content">
  <h1>myName: {myName}</h1>
  <h1>myAge: {myAge}</h1>
  <h2>isStatus: {isStatus ? 'Đã chết': 'Ế'}</h2>
  <h2>myInfo: { myInfo.name} - {myInfo.age}</h2>
</div>
)
