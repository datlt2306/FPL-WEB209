import Add from '@/features/product/_components/Add'
import Edit from '@/features/product/_components/Edit'
import List from '@/features/product/_components/List'
import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import ProductsPage from '@/pages/ProductsPage'
import Signup from '@/pages/auth/Signup'
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
                <Route path='signup' element={<Signup />} />
            </Route>
            <Route path='admin' element={<AdminLayout />}>
                <Route index element={<ManagerDashboardPage />} />
                <Route path='products' element={<ManagerProductPage />}>
                    <Route index element={<List />} />
                    <Route path='add' element={<Add />} />
                    <Route path=':id/edit' element={<Edit />} />
                </Route>
                <Route path='users' element={<ManagerUserPage />} />
            </Route>
        </Routes>
    )
}

export default Routers
