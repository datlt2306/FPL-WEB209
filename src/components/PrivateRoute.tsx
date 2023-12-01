import { Navigate, Outlet } from 'react-router-dom'

type PrivateRouteProps = {
    isAllowed?: () => boolean
    children?: React.ReactNode
    redirectPath?: string
}

const PrivateRoute = ({ isAllowed, children, redirectPath = '/signin' }: PrivateRouteProps) => {
    if (isAllowed && !isAllowed()) {
        return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet />
}

export default PrivateRoute
