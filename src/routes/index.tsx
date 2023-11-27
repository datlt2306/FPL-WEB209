import Add from '@/features/product/_components/Add'
import Edit from '@/features/product/_components/Edit'
import List from '@/features/product/_components/List'
import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import HomePage from '@/pages/HomePage'
import ProductDetailPage from '@/pages/ProductDetail'
import ProductsPage from '@/pages/ProductsPage'
import SignupPage from '@/pages/auth/Signup'
import ManageDashboardPage from '@/pages/manager/dashboard'
import ManagerProductPage from '@/pages/manager/product'

import { Route, Routes } from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='products/:id' element={<ProductDetailPage />} />
                <Route path='signup' element={<SignupPage />} />
            </Route>
            <Route path='admin' element={<AdminLayout />}>
                <Route index element={<ManageDashboardPage />} />
                <Route path='products' element={<ManagerProductPage />} />
            </Route>
        </Routes>
    )
}

export default Routers
