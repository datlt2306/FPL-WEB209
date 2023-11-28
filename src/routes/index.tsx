import { Toaster } from '@/components/ui/toaster'
import BaseLayout from '@/layouts/BaseLayout'
import ManagerLayout from '@/layouts/ManagerLayout'
import AboutPage from '@/pages/about'
import Signin from '@/pages/auth/Signin'
import Signup from '@/pages/auth/Signup'
import HomePage from '@/pages/home'
import DashboardPage from '@/pages/manager/dashboard'
import ManagerProductPage from '@/pages/manager/product'

import { Route, Routes } from 'react-router-dom'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<BaseLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='signin' element={<Signin />} />
                </Route>
                <Route path='/admin' element={<ManagerLayout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path='products' element={<ManagerProductPage />} />
                </Route>
            </Routes>
            <Toaster />
        </>
    )
}

export default Routers
