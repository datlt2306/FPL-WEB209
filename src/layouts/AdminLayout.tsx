import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <aside>Aside admin</aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout
