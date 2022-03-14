import React, { useState } from 'react'
import { Menu } from 'antd';
import  { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <Menu mode="horizontal">
        <Menu.Item>
          <NavLink to="/">
            Home Page
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/product">
            Product Page
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/dashboard">
            Product Page
          </NavLink>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Header