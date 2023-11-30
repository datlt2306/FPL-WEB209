import { Navigate } from 'react-router-dom'

type PrivateRouterProps = {
    user: any
    children?: React.ReactNode
    redirectPath?: string
}
const PrivateRouter = ({ user, children, redirectPath = '/signin' }: PrivateRouterProps) => {
    if (!user || Object.keys(user).length === 0 || user.user.role === 'member') {
        return <Navigate to={redirectPath!} replace />
    }
    return children
}
export default PrivateRouter
