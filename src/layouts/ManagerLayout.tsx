import { Outlet } from 'react-router-dom'

const ManagerLayout = () => {
    return (
        <div>
            <aside>Aside</aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default ManagerLayout
