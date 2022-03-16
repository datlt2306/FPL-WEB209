import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import Header from './components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';


function App(){

  return ( 
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />}/>
            {/* Cách 1:  */}
            <Route path="product">
                <Route index element={<Products />}/>
                <Route path=":id" element={<ProductDetail />} />
            </Route>
        </Route>
        <Route path="product" element={<h1>Product Page</h1>}/>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manager-product" element={<h1>Product Manager</h1>} />
          <Route path="manager-post" element={<h1>Post Manager</h1>} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
