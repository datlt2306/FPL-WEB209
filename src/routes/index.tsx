import PrivateRouter from '@/components/PrivateRouter'
import Add from '@/features/product/_components/Add'
import Edit from '@/features/product/_components/Edit'
import List from '@/features/product/_components/List'
import { useLocalStorage } from '@/hooks/useStorage'
import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import HomePage from '@/pages/HomePage'
import ProductDetailPage from '@/pages/ProductDetail'
import ProductsPage from '@/pages/ProductsPage'
import SigninPage from '@/pages/auth/Signin'
import SignupPage from '@/pages/auth/Signup'
import ManageDashboardPage from '@/pages/manager/dashboard'
import ManagerProductPage from '@/pages/manager/product'

import { Route, Routes } from 'react-router-dom'

const Routers = () => {
    const [user] = useLocalStorage('user', {})
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='products/:id' element={<ProductDetailPage />} />
                <Route path='signup' element={<SignupPage />} />
                <Route path='signin' element={<SigninPage />} />
            </Route>
            <Route
                path='admin'
                element={
                    <PrivateRouter user={user}>
                        <AdminLayout />
                    </PrivateRouter>
                }
            >
                <Route index element={<ManageDashboardPage />} />
                <Route path='products' element={<ManagerProductPage />}>
                    <Route index element={<List />} />
                    <Route path='add' element={<Add />} />
                    <Route path=':id/edit' element={<Edit />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Routers
