import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import ProductsPage from '@/pages/ProductsPage'
import ManagerDashboardPage from '@/pages/manager/dashboard/ManagerDashboardPage'
import ManagerProductPage from '@/pages/manager/product/ManagerProductPage'
import ManagerUserPage from '@/pages/manager/user/ManagerUserPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {}

const Routers = (props: Props) => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='about' element={<AboutPage />} />
            </Route>
            <Route path='/admin' element={<AdminLayout />}>
                <Route index element={<ManagerDashboardPage />} />
                <Route path='products' element={<ManagerProductPage />} />
                <Route path='users' element={<ManagerUserPage />} />
            </Route>
        </Routes>
    )
}

export default Routers
