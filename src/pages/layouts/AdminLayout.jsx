import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <header>Header admin</header>
        <aside>Sidebar</aside>
        <main><Outlet /></main>
    </div>
  )
}

export default AdminLayout