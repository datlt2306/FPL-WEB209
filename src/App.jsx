import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import Header from './components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';


function App(){

  return ( 
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="product" element={<h1>Product Page</h1>}/>
        <Route path="admin" element={<Admin />}>
          <Route index element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manager-product" element={<h1>Product Manager</h1>} />
          <Route path="manager-post" element={<h1>Post Manager</h1>} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
