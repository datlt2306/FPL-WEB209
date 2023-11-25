import { Toaster } from '@/components/ui/toaster'
import ProductAdd from '@/features/products/_components/Add'
import ProductEdit from '@/features/products/_components/Edit'
import ProductList from '@/features/products/_components/List'

import { Route, Routes } from 'react-router-dom'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<div>Home</div>} />
                <Route path='product' element={<ProductList />} />
                <Route path='product/add' element={<ProductAdd />} />
                <Route path='product/:id/edit' element={<ProductEdit />} />
            </Routes>
            <Toaster />
        </>
    )
}

export default Routers
