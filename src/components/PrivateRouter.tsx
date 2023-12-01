import React from 'react'
import { Navigate } from 'react-router-dom'

type PrivateRouterProps = {
    user: any
    children: React.ReactNode
    routerPath?: string
}

const PrivateRouter = ({ user, children, routerPath = '/signin' }: PrivateRouterProps) => {
    console.log(user)
    if (!user || Object.keys(user).length === 0) return <Navigate to={routerPath} />
    return children
}

export default PrivateRouter
