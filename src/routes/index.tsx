import PrivateRouter from '@/components/PrivateRouter'
import { Toaster } from '@/components/ui/toaster'
import { useLocalStorage } from '@/hooks/useStorage'
import BaseLayout from '@/layouts/BaseLayout'
import ManagerLayout from '@/layouts/ManagerLayout'
import AboutPage from '@/pages/about'
import Signin from '@/pages/auth/Signin'
import Signup from '@/pages/auth/Signup'
import HomePage from '@/pages/home'
import DashboardPage from '@/pages/manager/dashboard'
import ManagerProductPage from '@/pages/manager/product'

import { Navigate, Route, Routes } from 'react-router-dom'

const Routers = () => {
    const [user, , removeUser] = useLocalStorage('user', {})
    return (
        <>
            <Routes>
                <Route path='/' element={<BaseLayout />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path='about'
                        element={
                            <PrivateRouter user={user} redirectPath='/home'>
                                <AboutPage />
                            </PrivateRouter>
                        }
                    />
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
                        <PrivateRouter user={user}>
                            <ManagerLayout />
                        </PrivateRouter>
                    }
                >
                    <Route index element={<DashboardPage />} />
                    <Route path='products' element={<ManagerProductPage />} />
                </Route>
            </Routes>
            <Toaster />
        </>
    )
}

export default Routers
