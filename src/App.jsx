import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';


function App(){

  return ( 
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="product" element={<h1>Product Page</h1>}/>
      </Routes>
    </div>
  )
}
export default App
