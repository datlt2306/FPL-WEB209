import { Navigate, Outlet } from 'react-router-dom'

type PrivateRouteProps = {
    isAllowed?: boolean
    children?: React.ReactNode
    redirectPath?: string
}

const PrivateRoute = ({ isAllowed, children, redirectPath = '/signin' }: PrivateRouteProps) => {
    console.log(isAllowed)
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet />
}

export default PrivateRoute
