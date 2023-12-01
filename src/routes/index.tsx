import Signup from '@/Signup'
import PrivateRoute from '@/components/PrivateRoute'
import Add from '@/features/product/_components/Add'
import Edit from '@/features/product/_components/Edit'
import List from '@/features/product/_components/List'
import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import { isUserAllowed } from '@/lib/utils'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import ProductsPage from '@/pages/ProductsPage'
import Signin from '@/pages/auth/Signin'
import ManagerProductPage from '@/pages/manager/product/ManagerProductPage'
import ManagerUserPage from '@/pages/manager/user/ManagerUserPage'
import { Navigate, Route, Routes } from 'react-router-dom'

const Routers = () => {
    // const [user, , removeUser] = useLocalStorage('user', {})
    const user = {
        id: '2',
        name: 'nhanvien',
        roles: 'nhanvien'
    }

    return (
        <>
            {/* {!user || Object.keys(user).length === 0 ? null : <button onClick={removeUser}>Logout</button>} */}
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
                        // Nếu quyền là 'nhanvien' hoặc 'sales' thì được phép truy cập
                        <PrivateRoute isAllowed={() => isUserAllowed(user, ['nhanvien', 'sales'])}>
                            <AdminLayout />
                        </PrivateRoute>
                    }
                >
                    <Route
                        path='users'
                        element={
                            // Nếu quyền là 'nhanvien' thì được phép truy cập
                            <PrivateRoute isAllowed={() => isUserAllowed(user, 'nhanvien')}>User Page</PrivateRoute>
                        }
                    />
                    <Route
                        path='products'
                        element={
                            // Đường dẫn bắt đầu bằng '/admin/products' chỉ cho phép truy cập nếu quyền là 'admin'
                            // Nếu không phải 'admin' thì sẽ redirect về '/authorized'
                            <PrivateRoute redirectPath='/authorized' isAllowed={() => isUserAllowed(user, 'admin')}>
                                <ManagerProductPage />
                            </PrivateRoute>
                        }
                    >
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
