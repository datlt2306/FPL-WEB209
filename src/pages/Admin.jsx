import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Admin = () => {
  return (
    <div>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Admin