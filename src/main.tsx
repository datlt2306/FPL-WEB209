import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


interface propsType {
  name: string,
  age?: number
}

function showName({ name }: propsType): string {
  return `Hello Dat ${name}`;
}

function ShowName({ name }: propsType): JSX.Element {
  return React.createElement('h1', null, `Hello ${name}`);
}

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
  <div>myName: {myName}</div>
  <div>myAge: {myAge}</div>
  <div>isStatus: {isStatus ? 'Đã chết': 'Ế'}</div>
  <div>myInfo: { myInfo.name} - {myInfo.age}</div>
  <div>Function : {showName({ name: "Dat", age: 20})}</div>
  <div>Component:<ShowName name="Dat" age={20} /></div>
</div>
)

