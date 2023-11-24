import Add from '@/features/product/_components/Add'
import { Edit, List } from 'lucide-react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {}

const Routers = (props: Props) => {
    return (
        <Routes>
            <Route path='/' element={<div>Home Page</div>} />
            <Route path='products' element={<List />} />
            <Route path='products/add' element={<Add />} />
            <Route path='products/:id' element={<Edit />} />
        </Routes>
    )
}

export default Routers
