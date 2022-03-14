import React from 'react'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div>
        <NavLink to="/admin/manager-product">Manager Product</NavLink>
        <NavLink to="/admin/manager-post">Manager Post</NavLink>
    </div>
  )
}

export default Sidebar