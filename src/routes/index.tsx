import PrivateRoute from '@/components/PrivateRoute'
import Add from '@/features/product/_components/Add'
import Edit from '@/features/product/_components/Edit'
import List from '@/features/product/_components/List'
import { useLocalStorage } from '@/hooks/useStorage'
import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import ProductsPage from '@/pages/ProductsPage'
import Signin from '@/pages/auth/Signin'
import Signup from '@/pages/auth/Signup'
import ManagerDashboardPage from '@/pages/manager/dashboard/ManagerDashboardPage'
import ManagerProductPage from '@/pages/manager/product/ManagerProductPage'
import ManagerUserPage from '@/pages/manager/user/ManagerUserPage'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

type Props = {}

const Routers = () => {
    // const [user, setUser] = React.useState({ id: 1, name: 'Dat' })
    const [user, , removeUser] = useLocalStorage('user', {})
    return (
        <>
            {!user || Object.keys(user).length === 0 ? null : <button onClick={removeUser}>Logout</button>}
            <Routes>
                <Route path='/' element={<BaseLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='products' element={<ProductsPage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route
                        path='signup'
                        element={!user || Object.keys(user).length === 0 ? <Signup /> : <Navigate to='/' />}
                    />
                    <Route
                        path='signin'
                        element={!user || Object.keys(user).length === 0 ? <Signin /> : <Navigate to='/' />}
                    />
                </Route>
                <Route
                    path='admin'
                    element={
                        <PrivateRoute user={user}>
                            <AdminLayout />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<ManagerDashboardPage />} />
                    <Route path='users' element={<>User Page</>} />
                    <Route path='products' element={<ManagerProductPage />}>
                        <Route index element={<List />} />
                        <Route path='add' element={<Add />} />
                        <Route path=':id/edit' element={<Edit />} />
                    </Route>
                    <Route path='users' element={<ManagerUserPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default Routers
