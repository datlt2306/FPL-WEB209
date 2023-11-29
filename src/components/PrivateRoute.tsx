import { Navigate, Outlet } from 'react-router-dom'

type PrivateRouteProps = {
    user?: boolean
    children?: React.ReactNode
    redirectPath?: string
}

const PrivateRoute = ({ user, children, redirectPath = '/signin' }: PrivateRouteProps) => {
    if (!user || Object.keys(user).length === 0) {
        return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet />
}

export default PrivateRoute
